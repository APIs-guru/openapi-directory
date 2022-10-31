package operations



type UpdateOrganizationConfigTemplatePathParams struct {
    ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationConfigTemplateRequestBody struct {
    Name *string `json:"name,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

type UpdateOrganizationConfigTemplateRequest struct {
    PathParams UpdateOrganizationConfigTemplatePathParams 
    Request *UpdateOrganizationConfigTemplateRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationConfigTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationConfigTemplate200ApplicationJSONObject map[string]interface{} 
    
}

