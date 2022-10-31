package operations



type UpdateNetworkApplianceFirewallL7FirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum string

const (
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = "deny"
)



type UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum string

const (
    UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplication UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "application"
UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplicationCategory UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "applicationCategory"
UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "host"
UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "port"
UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum = "ipRange"
)


type UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules struct {
    Policy *UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum `json:"policy,omitempty"`
    Type *UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody struct {
    Rules []UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules `json:"rules,omitempty"`
    
}

type UpdateNetworkApplianceFirewallL7FirewallRulesRequest struct {
    PathParams UpdateNetworkApplianceFirewallL7FirewallRulesPathParams 
    Request *UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceFirewallL7FirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

