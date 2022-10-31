package operations



type UpdateOrganizationApplianceSecurityIntrusionPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules struct {
    Message *string `json:"message,omitempty"`
    RuleID string `json:"ruleId"`
    
}

type UpdateOrganizationApplianceSecurityIntrusionRequestBody struct {
    AllowedRules []UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules `json:"allowedRules"`
    
}

type UpdateOrganizationApplianceSecurityIntrusionRequest struct {
    PathParams UpdateOrganizationApplianceSecurityIntrusionPathParams 
    Request UpdateOrganizationApplianceSecurityIntrusionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationApplianceSecurityIntrusionResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject map[string]interface{} 
    
}

