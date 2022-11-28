package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type SiteToSiteVpn struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSiteToSiteVpn(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SiteToSiteVpn {
	return &SiteToSiteVpn{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceVpnSiteToSiteVpn - Return the site-to-site VPN settings of a network
// Return the site-to-site VPN settings of a network. Only valid for MX networks.
func (s *SiteToSiteVpn) GetNetworkApplianceVpnSiteToSiteVpn(ctx context.Context, request operations.GetNetworkApplianceVpnSiteToSiteVpnRequest) (*operations.GetNetworkApplianceVpnSiteToSiteVpnResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.PathParams)

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

	res := &operations.GetNetworkApplianceVpnSiteToSiteVpnResponse{
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

			res.GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceVpnSiteToSiteVpn - Update the site-to-site VPN settings of a network
// Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
func (s *SiteToSiteVpn) UpdateNetworkApplianceVpnSiteToSiteVpn(ctx context.Context, request operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest) (*operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse{
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

			res.UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject = out
		}
	}

	return res, nil
}
