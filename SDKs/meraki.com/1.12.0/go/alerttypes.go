package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type AlertTypes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAlertTypes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AlertTypes {
	return &AlertTypes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
// Return a list of alert types to be used with managing webhook alerts
func (s *AlertTypes) GetOrganizationWebhooksAlertTypes(ctx context.Context, request operations.GetOrganizationWebhooksAlertTypesRequest) (*operations.GetOrganizationWebhooksAlertTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/webhooks/alertTypes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationWebhooksAlertTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetOrganizationWebhooksAlertTypes200ApplicationJSONObject = out
		}
	}

	return res, nil
}
