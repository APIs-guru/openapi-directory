package operations



type DeleteOrganizationSamlRolePathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    SamlRoleID string `pathParam:"style=simple,explode=false,name=samlRoleId"`
    
}

type DeleteOrganizationSamlRoleRequest struct {
    PathParams DeleteOrganizationSamlRolePathParams 
    
}

type DeleteOrganizationSamlRoleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

