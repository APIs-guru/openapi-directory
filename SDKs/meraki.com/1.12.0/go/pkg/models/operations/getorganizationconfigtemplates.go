package operations



type GetOrganizationConfigTemplatesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationConfigTemplatesRequest struct {
    PathParams GetOrganizationConfigTemplatesPathParams 
    
}

type GetOrganizationConfigTemplatesResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationConfigTemplates200ApplicationJSONObject map[string]interface{} 
    
}

