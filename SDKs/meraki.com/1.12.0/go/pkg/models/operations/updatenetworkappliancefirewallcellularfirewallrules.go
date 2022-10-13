package operations

type UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum string

const (
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum = "allow"
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumDeny  UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum = "deny"
)

type UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum string

const (
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumTCP  UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = "tcp"
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumUDP  UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = "udp"
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = "icmp"
	UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumAny  UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = "any"
)

type UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules struct {
	Comment       *string                                                                         `json:"comment"`
	DestCidr      string                                                                          `json:"destCidr"`
	DestPort      *string                                                                         `json:"destPort"`
	Policy        UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum   `json:"policy"`
	Protocol      UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
	SrcCidr       string                                                                          `json:"srcCidr"`
	SrcPort       *string                                                                         `json:"srcPort"`
	SyslogEnabled *bool                                                                           `json:"syslogEnabled"`
}

type UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody struct {
	Rules []UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules `json:"rules"`
}

type UpdateNetworkApplianceFirewallCellularFirewallRulesRequest struct {
	PathParams UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams
	Request    *UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceFirewallCellularFirewallRulesResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	UpdateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject map[string]interface{}
}
