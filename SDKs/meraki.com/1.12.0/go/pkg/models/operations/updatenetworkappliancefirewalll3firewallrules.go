package operations



type UpdateNetworkApplianceFirewallL3FirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum string

const (
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = "allow"
UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = "deny"
)



type UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum string

const (
    UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "tcp"
UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "udp"
UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "icmp"
UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = "any"
)


type UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules struct {
    Comment *string `json:"comment,omitempty"`
    DestCidr string `json:"destCidr"`
    DestPort *string `json:"destPort,omitempty"`
    Policy UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum `json:"policy"`
    Protocol UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
    SrcCidr string `json:"srcCidr"`
    SrcPort *string `json:"srcPort,omitempty"`
    SyslogEnabled *bool `json:"syslogEnabled,omitempty"`
    
}

type UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody struct {
    Rules []UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules `json:"rules,omitempty"`
    SyslogDefaultRule *bool `json:"syslogDefaultRule,omitempty"`
    
}

type UpdateNetworkApplianceFirewallL3FirewallRulesRequest struct {
    PathParams UpdateNetworkApplianceFirewallL3FirewallRulesPathParams 
    Request *UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceFirewallL3FirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

