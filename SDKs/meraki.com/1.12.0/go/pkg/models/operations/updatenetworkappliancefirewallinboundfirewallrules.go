package operations

type UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum string

const (
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum = "allow"
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny  UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum = "deny"
)

type UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum string

const (
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP  UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = "tcp"
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumUDP  UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = "udp"
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = "icmp"
	UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumAny  UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = "any"
)

type UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules struct {
	Comment       *string                                                                        `json:"comment"`
	DestCidr      string                                                                         `json:"destCidr"`
	DestPort      *string                                                                        `json:"destPort"`
	Policy        UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum   `json:"policy"`
	Protocol      UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
	SrcCidr       string                                                                         `json:"srcCidr"`
	SrcPort       *string                                                                        `json:"srcPort"`
	SyslogEnabled *bool                                                                          `json:"syslogEnabled"`
}

type UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody struct {
	Rules             []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules `json:"rules"`
	SyslogDefaultRule *bool                                                                `json:"syslogDefaultRule"`
}

type UpdateNetworkApplianceFirewallInboundFirewallRulesRequest struct {
	PathParams UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams
	Request    *UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceFirewallInboundFirewallRulesResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int64
	UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject map[string]interface{}
}
