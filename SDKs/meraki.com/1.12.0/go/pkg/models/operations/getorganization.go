package operations



type GetOrganizationPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationRequest struct {
    PathParams GetOrganizationPathParams 
    
}

type GetOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganization200ApplicationJSONObject map[string]interface{} 
    
}

