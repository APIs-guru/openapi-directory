package operations



type GetOrganizationAdaptivePolicyACLPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationAdaptivePolicyACLRequest struct {
    PathParams GetOrganizationAdaptivePolicyACLPathParams 
    
}

type GetOrganizationAdaptivePolicyACLResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationAdaptivePolicyACL200ApplicationJSONObject map[string]interface{} 
    
}

