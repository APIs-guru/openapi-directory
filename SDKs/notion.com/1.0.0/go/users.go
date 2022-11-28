package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Users struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUsers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Users {
	return &Users{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RetrieveAUser - Retrieve a user
// Retrieve a user object using the ID specified in the request path.
func (s *Users) RetrieveAUser(ctx context.Context, request operations.RetrieveAUserRequest) (*operations.RetrieveAUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/users/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveAUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RetrieveAUser200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveAUser200ApplicationJSONObject = out
		}
	}

	return res, nil
}
