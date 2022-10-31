package operations

import (
"openapi/pkg/models/shared")

type GetAllProductsInPosPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetAllProductsInPosSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAllProductsInPosSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetAllProductsInPosSecurity struct {
    Option1 *GetAllProductsInPosSecurityOption1 `security:"option"`
    Option2 *GetAllProductsInPosSecurityOption2 `security:"option"`
    
}

type GetAllProductsInPosRequest struct {
    PathParams GetAllProductsInPosPathParams 
    Security GetAllProductsInPosSecurity 
    
}

type GetAllProductsInPosResponse struct {
    ContentType string 
    ProductResponses []shared.ProductResponse 
    StatusCode int64 
    
}

