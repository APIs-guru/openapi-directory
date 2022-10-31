package operations



type GetOrganizationConfigTemplatePathParams struct {
    ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationConfigTemplateRequest struct {
    PathParams GetOrganizationConfigTemplatePathParams 
    
}

type GetOrganizationConfigTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationConfigTemplate200ApplicationJSONObject map[string]interface{} 
    
}

