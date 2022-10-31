package operations

import (
"openapi/pkg/models/shared")

type GetProductTypesPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetProductTypesSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetProductTypesSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetProductTypesSecurity struct {
    Option1 *GetProductTypesSecurityOption1 `security:"option"`
    Option2 *GetProductTypesSecurityOption2 `security:"option"`
    
}

type GetProductTypesRequest struct {
    PathParams GetProductTypesPathParams 
    Security GetProductTypesSecurity 
    
}

type GetProductTypesResponse struct {
    CategoryResponse *shared.CategoryResponse 
    ContentType string 
    StatusCode int64 
    
}

