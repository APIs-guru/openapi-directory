package operations



type GetOrganizationBrandingPoliciesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationBrandingPoliciesRequest struct {
    PathParams GetOrganizationBrandingPoliciesPathParams 
    
}

type GetOrganizationBrandingPoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationBrandingPolicies200ApplicationJSONObject map[string]interface{} 
    
}

