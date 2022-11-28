package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type DefaultSupportedIdps struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDefaultSupportedIdps(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DefaultSupportedIdps {
	return &DefaultSupportedIdps{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// IdentitytoolkitDefaultSupportedIdpsList - List all default supported Idps.
func (s *DefaultSupportedIdps) IdentitytoolkitDefaultSupportedIdpsList(ctx context.Context, request operations.IdentitytoolkitDefaultSupportedIdpsListRequest) (*operations.IdentitytoolkitDefaultSupportedIdpsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/defaultSupportedIdps"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitDefaultSupportedIdpsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse = out
		}
	}

	return res, nil
}
