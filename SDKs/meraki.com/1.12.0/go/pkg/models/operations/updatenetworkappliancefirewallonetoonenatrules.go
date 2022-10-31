package operations



type UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum string

const (
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "tcp"
UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "udp"
UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "icmp-ping"
UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumAny UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = "any"
)


type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound struct {
    AllowedIps []string `json:"allowedIps,omitempty"`
    DestinationPorts []string `json:"destinationPorts,omitempty"`
    Protocol *UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum `json:"protocol,omitempty"`
    
}


type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum string

const (
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1 UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum = "internet1"
UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2 UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum = "internet2"
)


type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules struct {
    AllowedInbound []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound `json:"allowedInbound,omitempty"`
    LanIP string `json:"lanIp"`
    Name *string `json:"name,omitempty"`
    PublicIP *string `json:"publicIp,omitempty"`
    Uplink *UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum `json:"uplink,omitempty"`
    
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody struct {
    Rules []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules `json:"rules"`
    
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesRequest struct {
    PathParams UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams 
    Request UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceFirewallOneToOneNatRulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject map[string]interface{} 
    
}

