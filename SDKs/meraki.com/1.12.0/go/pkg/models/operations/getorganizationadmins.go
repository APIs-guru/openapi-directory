package operations



type GetOrganizationAdminsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationAdminsRequest struct {
    PathParams GetOrganizationAdminsPathParams 
    
}

type GetOrganizationAdminsResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationAdmins200ApplicationJSONObject map[string]interface{} 
    
}

