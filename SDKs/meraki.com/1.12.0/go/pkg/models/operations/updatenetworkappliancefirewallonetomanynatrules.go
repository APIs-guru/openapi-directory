package operations

type UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum string

const (
	UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum = "tcp"
	UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum = "udp"
)

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules struct {
	AllowedIps []string                                                                              `json:"allowedIps,omitempty"`
	LocalIP    *string                                                                               `json:"localIp,omitempty"`
	LocalPort  *string                                                                               `json:"localPort,omitempty"`
	Name       *string                                                                               `json:"name,omitempty"`
	Protocol   *UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum `json:"protocol,omitempty"`
	PublicPort *string                                                                               `json:"publicPort,omitempty"`
}

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum string

const (
	UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1 UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = "internet1"
	UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2 UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = "internet2"
)

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules struct {
	PortRules []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules `json:"portRules"`
	PublicIP  string                                                                     `json:"publicIp"`
	Uplink    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum  `json:"uplink"`
}

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody struct {
	Rules []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules `json:"rules"`
}

type UpdateNetworkApplianceFirewallOneToManyNatRulesRequest struct {
	PathParams UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams
	Request    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceFirewallOneToManyNatRulesResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	UpdateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject map[string]interface{}
}
