package operations

import (
"openapi/pkg/models/shared")

type UpdateProductPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    ProductUUID string `pathParam:"style=simple,explode=false,name=productUuid"`
    
}

type UpdateProductHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type UpdateProductSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateProductSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type UpdateProductSecurity struct {
    Option1 *UpdateProductSecurityOption1 `security:"option"`
    Option2 *UpdateProductSecurityOption2 `security:"option"`
    
}

type UpdateProductRequest struct {
    PathParams UpdateProductPathParams 
    Headers UpdateProductHeaders 
    Request shared.ProductUpdateRequest `request:"mediaType=application/json"`
    Security UpdateProductSecurity 
    
}

type UpdateProductResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

