package operations

type UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum string

const (
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP      UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "tcp"
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP      UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "udp"
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "icmp-ping"
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumAny      UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "any"
)

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound struct {
	AllowedIps       []string                                                                                  `json:"allowedIps"`
	DestinationPorts []string                                                                                  `json:"destinationPorts"`
	Protocol         *UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum `json:"protocol"`
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum string

const (
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1 UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum = "internet1"
	UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2 UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum = "internet2"
)

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules struct {
	AllowedInbound []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound `json:"allowedInbound"`
	LanIP          string                                                                         `json:"lanIp"`
	Name           *string                                                                        `json:"name"`
	PublicIP       *string                                                                        `json:"publicIp"`
	Uplink         *UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum      `json:"uplink"`
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody struct {
	Rules []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules `json:"rules"`
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequest struct {
	PathParams UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams
	Request    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesResponse struct {
	ContentType                                                            string
	StatusCode                                                             int64
	UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject map[string]interface{}
}
