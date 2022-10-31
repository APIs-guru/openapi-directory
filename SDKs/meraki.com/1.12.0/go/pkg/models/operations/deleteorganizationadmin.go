package operations



type DeleteOrganizationAdminPathParams struct {
    AdminID string `pathParam:"style=simple,explode=false,name=adminId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type DeleteOrganizationAdminRequest struct {
    PathParams DeleteOrganizationAdminPathParams 
    
}

type DeleteOrganizationAdminResponse struct {
    ContentType string 
    StatusCode int64 
    
}

