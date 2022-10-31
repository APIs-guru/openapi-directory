package operations

import (
"openapi/pkg/models/shared")

type CreateCategoriesPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type CreateCategoriesSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateCategoriesSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type CreateCategoriesSecurity struct {
    Option1 *CreateCategoriesSecurityOption1 `security:"option"`
    Option2 *CreateCategoriesSecurityOption2 `security:"option"`
    
}

type CreateCategoriesRequest struct {
    PathParams CreateCategoriesPathParams 
    Request shared.CategoryRequest `request:"mediaType=application/json"`
    Security CreateCategoriesSecurity 
    
}

type CreateCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

