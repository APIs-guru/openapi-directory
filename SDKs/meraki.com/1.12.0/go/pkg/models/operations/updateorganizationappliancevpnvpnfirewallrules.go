package operations

type UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum string

const (
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumAllow UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = "allow"
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumDeny  UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = "deny"
)

type UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum string

const (
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumTCP  UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = "tcp"
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumUDP  UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = "udp"
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumIcmp UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = "icmp"
	UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumAny  UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = "any"
)

type UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules struct {
	Comment       *string                                                                    `json:"comment,omitempty"`
	DestCidr      string                                                                     `json:"destCidr"`
	DestPort      *string                                                                    `json:"destPort,omitempty"`
	Policy        UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum   `json:"policy"`
	Protocol      UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
	SrcCidr       string                                                                     `json:"srcCidr"`
	SrcPort       *string                                                                    `json:"srcPort,omitempty"`
	SyslogEnabled *bool                                                                      `json:"syslogEnabled,omitempty"`
}

type UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody struct {
	Rules             []UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules `json:"rules,omitempty"`
	SyslogDefaultRule *bool                                                            `json:"syslogDefaultRule,omitempty"`
}

type UpdateOrganizationApplianceVpnVpnFirewallRulesRequest struct {
	PathParams UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams
	Request    *UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationApplianceVpnVpnFirewallRulesResponse struct {
	ContentType                                                            string
	StatusCode                                                             int64
	UpdateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject map[string]interface{}
}
