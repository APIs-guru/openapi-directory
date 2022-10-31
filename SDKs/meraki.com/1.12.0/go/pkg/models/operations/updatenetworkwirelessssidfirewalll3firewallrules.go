package operations



type UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}


type UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum string

const (
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = "allow"
UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = "deny"
)



type UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum string

const (
    UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "tcp"
UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "udp"
UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "icmp"
UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "any"
)


type UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules struct {
    Comment *string `json:"comment,omitempty"`
    DestCidr string `json:"destCidr"`
    DestPort *string `json:"destPort,omitempty"`
    Policy UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum `json:"policy"`
    Protocol UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
    
}

type UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody struct {
    AllowLanAccess *bool `json:"allowLanAccess,omitempty"`
    Rules []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules `json:"rules,omitempty"`
    
}

type UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest struct {
    PathParams UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams 
    Request *UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

