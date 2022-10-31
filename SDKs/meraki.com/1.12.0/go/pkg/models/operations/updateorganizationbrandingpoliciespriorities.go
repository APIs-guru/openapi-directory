package operations



type UpdateOrganizationBrandingPoliciesPrioritiesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationBrandingPoliciesPrioritiesRequestBody struct {
    BrandingPolicyIds []string `json:"brandingPolicyIds"`
    
}

type UpdateOrganizationBrandingPoliciesPrioritiesRequest struct {
    PathParams UpdateOrganizationBrandingPoliciesPrioritiesPathParams 
    Request UpdateOrganizationBrandingPoliciesPrioritiesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationBrandingPoliciesPrioritiesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject map[string]interface{} 
    
}

