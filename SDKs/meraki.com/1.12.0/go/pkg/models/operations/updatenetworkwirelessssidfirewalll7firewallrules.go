package operations



type UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}


type UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum string

const (
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = "deny"
)



type UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum string

const (
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplication UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "application"
UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplicationCategory UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "applicationCategory"
UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "host"
UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "port"
UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "ipRange"
)


type UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules struct {
    Policy *UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum `json:"policy,omitempty"`
    Type *UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody struct {
    Rules []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules `json:"rules,omitempty"`
    
}

type UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest struct {
    PathParams UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams 
    Request *UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

