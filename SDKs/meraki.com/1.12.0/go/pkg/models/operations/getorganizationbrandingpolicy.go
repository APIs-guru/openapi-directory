package operations



type GetOrganizationBrandingPolicyPathParams struct {
    BrandingPolicyID string `pathParam:"style=simple,explode=false,name=brandingPolicyId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationBrandingPolicyRequest struct {
    PathParams GetOrganizationBrandingPolicyPathParams 
    
}

type GetOrganizationBrandingPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationBrandingPolicy200ApplicationJSONObject map[string]interface{} 
    
}

