package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type EapOverride struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEapOverride(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EapOverride {
	return &EapOverride{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
// Return the EAP overridden parameters for an SSID
func (s *EapOverride) GetNetworkWirelessSsidEapOverride(ctx context.Context, request operations.GetNetworkWirelessSsidEapOverrideRequest) (*operations.GetNetworkWirelessSsidEapOverrideResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.PathParams)

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

	res := &operations.GetNetworkWirelessSsidEapOverrideResponse{
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

			res.GetNetworkWirelessSsidEapOverride200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
// Update the EAP overridden parameters for an SSID.
func (s *EapOverride) UpdateNetworkWirelessSsidEapOverride(ctx context.Context, request operations.UpdateNetworkWirelessSsidEapOverrideRequest) (*operations.UpdateNetworkWirelessSsidEapOverrideResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateNetworkWirelessSsidEapOverrideResponse{
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

			res.UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject = out
		}
	}

	return res, nil
}
