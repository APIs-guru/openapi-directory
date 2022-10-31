package operations

import (
"openapi/pkg/models/shared")

type GetAllOptionsPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetAllOptionsSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAllOptionsSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetAllOptionsSecurity struct {
    Option1 *GetAllOptionsSecurityOption1 `security:"option"`
    Option2 *GetAllOptionsSecurityOption2 `security:"option"`
    
}

type GetAllOptionsRequest struct {
    PathParams GetAllOptionsPathParams 
    Security GetAllOptionsSecurity 
    
}

type GetAllOptionsResponse struct {
    ContentType string 
    StatusCode int64 
    VariantOptionsResponses []shared.VariantOptionsResponse 
    
}

