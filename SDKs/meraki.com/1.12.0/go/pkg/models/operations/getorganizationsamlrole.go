package operations



type GetOrganizationSamlRolePathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    SamlRoleID string `pathParam:"style=simple,explode=false,name=samlRoleId"`
    
}

type GetOrganizationSamlRoleRequest struct {
    PathParams GetOrganizationSamlRolePathParams 
    
}

type GetOrganizationSamlRoleResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSamlRole200ApplicationJSONObject map[string]interface{} 
    
}

