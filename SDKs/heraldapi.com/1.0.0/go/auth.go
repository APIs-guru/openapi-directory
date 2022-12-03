package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Auth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAuth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Auth {
	return &Auth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAuthToken - /auth/token
// Generate Herald API access tokens. These tokens expire after 24 hours and can be used to access any auth-protected Herald API endpoint. To use these tokens in future requests, include them as a bearer token in the "Authorization" header. Below is an example flow:
//
// First, use your API key to get an access token:
// ``` http
// POST /auth/token
//
//	{
//	  "api_key": "06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM="
//	}
//
// ```
//
// The response will look like this:
// ``` json
//
//	{
//	  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg",
//	  "expires_at": 1646680150
//	}
//
// ```
//
// Then use that token in future requests, like so:
// ``` http
// GET /producers
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg
// ```
func (s *Auth) PostAuthToken(ctx context.Context, request operations.PostAuthTokenRequest) (*operations.PostAuthTokenResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/auth/token"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAuthTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAuthToken200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAuthToken200ApplicationJSONObject = out
		}
	}

	return res, nil
}
