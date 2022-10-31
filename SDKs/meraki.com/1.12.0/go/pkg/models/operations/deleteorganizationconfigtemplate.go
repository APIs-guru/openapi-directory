package operations



type DeleteOrganizationConfigTemplatePathParams struct {
    ConfigTemplateID string `pathParam:"style=simple,explode=false,name=configTemplateId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type DeleteOrganizationConfigTemplateRequest struct {
    PathParams DeleteOrganizationConfigTemplatePathParams 
    
}

type DeleteOrganizationConfigTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

