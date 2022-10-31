package operations



type DeleteOrganizationSamlIdpPathParams struct {
    IdpID string `pathParam:"style=simple,explode=false,name=idpId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type DeleteOrganizationSamlIdpRequest struct {
    PathParams DeleteOrganizationSamlIdpPathParams 
    
}

type DeleteOrganizationSamlIdpResponse struct {
    ContentType string 
    StatusCode int64 
    
}

