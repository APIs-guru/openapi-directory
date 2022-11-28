package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ApplicationCategories struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewApplicationCategories(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ApplicationCategories {
	return &ApplicationCategories{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
// Return the L7 firewall application categories and their associated applications for an MX network
func (s *ApplicationCategories) GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx context.Context, request operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest) (*operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", request.PathParams)

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

	res := &operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse{
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

			res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkTrafficShapingApplicationCategories - Returns the application categories for traffic shaping rules.
// Returns the application categories for traffic shaping rules.
func (s *ApplicationCategories) GetNetworkTrafficShapingApplicationCategories(ctx context.Context, request operations.GetNetworkTrafficShapingApplicationCategoriesRequest) (*operations.GetNetworkTrafficShapingApplicationCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/trafficShaping/applicationCategories", request.PathParams)

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

	res := &operations.GetNetworkTrafficShapingApplicationCategoriesResponse{
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

			res.GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject = out
		}
	}

	return res, nil
}
