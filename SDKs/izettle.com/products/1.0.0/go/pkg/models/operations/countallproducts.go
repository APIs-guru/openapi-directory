package operations

import (
"openapi/pkg/models/shared")

type CountAllProductsPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type CountAllProductsSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CountAllProductsSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type CountAllProductsSecurity struct {
    Option1 *CountAllProductsSecurityOption1 `security:"option"`
    Option2 *CountAllProductsSecurityOption2 `security:"option"`
    
}

type CountAllProductsRequest struct {
    PathParams CountAllProductsPathParams 
    Security CountAllProductsSecurity 
    
}

type CountAllProductsResponse struct {
    ContentType string 
    ProductCountResponses []shared.ProductCountResponse 
    StatusCode int64 
    
}

