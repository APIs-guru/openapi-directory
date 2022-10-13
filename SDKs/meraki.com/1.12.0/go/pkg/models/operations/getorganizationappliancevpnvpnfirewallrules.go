package operations

type GetOrganizationApplianceVpnVpnFirewallRulesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationApplianceVpnVpnFirewallRulesRequest struct {
	PathParams GetOrganizationApplianceVpnVpnFirewallRulesPathParams
}

type GetOrganizationApplianceVpnVpnFirewallRulesResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject map[string]interface{}
}
