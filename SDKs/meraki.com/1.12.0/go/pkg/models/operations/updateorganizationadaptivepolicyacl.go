package operations



type UpdateOrganizationAdaptivePolicyACLPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum string

const (
    UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumAny UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "any"
UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv4 UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv4"
UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv6 UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = "ipv6"
)



type UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum string

const (
    UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "allow"
UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = "deny"
)



type UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum string

const (
    UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "tcp"
UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumUDP UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "udp"
UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "icmp"
UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumAny UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = "any"
)


type UpdateOrganizationAdaptivePolicyACLRequestBodyRules struct {
    DstPort *string `json:"dstPort,omitempty"`
    Policy UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum `json:"policy"`
    Protocol UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum `json:"protocol"`
    SrcPort *string `json:"srcPort,omitempty"`
    
}

type UpdateOrganizationAdaptivePolicyACLRequestBody struct {
    Description *string `json:"description,omitempty"`
    IPVersion *UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum `json:"ipVersion,omitempty"`
    Name *string `json:"name,omitempty"`
    Rules []UpdateOrganizationAdaptivePolicyACLRequestBodyRules `json:"rules,omitempty"`
    
}

type UpdateOrganizationAdaptivePolicyACLRequest struct {
    PathParams UpdateOrganizationAdaptivePolicyACLPathParams 
    Request *UpdateOrganizationAdaptivePolicyACLRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationAdaptivePolicyACLResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationAdaptivePolicyACL200ApplicationJSONObject map[string]interface{} 
    
}

