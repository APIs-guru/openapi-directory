package operations

type UpdateNetworkApplianceFirewallPortForwardingRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum string

const (
	UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumTCP UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = "tcp"
	UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumUDP UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum = "udp"
)

type UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum string

const (
	UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet1 UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = "internet1"
	UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet2 UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = "internet2"
	UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumBoth      UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum = "both"
)

type UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules struct {
	AllowedIps []string                                                                      `json:"allowedIps"`
	LanIP      string                                                                        `json:"lanIp"`
	LocalPort  string                                                                        `json:"localPort"`
	Name       *string                                                                       `json:"name,omitempty"`
	Protocol   UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum `json:"protocol"`
	PublicPort string                                                                        `json:"publicPort"`
	Uplink     *UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum  `json:"uplink,omitempty"`
}

type UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody struct {
	Rules []UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules `json:"rules"`
}

type UpdateNetworkApplianceFirewallPortForwardingRulesRequest struct {
	PathParams UpdateNetworkApplianceFirewallPortForwardingRulesPathParams
	Request    UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceFirewallPortForwardingRulesResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	UpdateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject map[string]interface{}
}
