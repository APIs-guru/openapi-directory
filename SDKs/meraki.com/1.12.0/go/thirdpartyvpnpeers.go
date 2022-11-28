package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ThirdPartyVpnPeers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewThirdPartyVpnPeers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ThirdPartyVpnPeers {
	return &ThirdPartyVpnPeers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetOrganizationApplianceVpnThirdPartyVpnPeers - Return the third party VPN peers for an organization
// Return the third party VPN peers for an organization
func (s *ThirdPartyVpnPeers) GetOrganizationApplianceVpnThirdPartyVpnPeers(ctx context.Context, request operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest) (*operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.PathParams)

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

	res := &operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse{
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

			res.GetOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateOrganizationApplianceVpnThirdPartyVpnPeers - Update the third party VPN peers for an organization
// Update the third party VPN peers for an organization
func (s *ThirdPartyVpnPeers) UpdateOrganizationApplianceVpnThirdPartyVpnPeers(ctx context.Context, request operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest) (*operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse{
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

			res.UpdateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJSONObject = out
		}
	}

	return res, nil
}
