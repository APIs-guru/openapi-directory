package operations

import (
"openapi/pkg/models/shared")

type GetAllDiscountsPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetAllDiscountsSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAllDiscountsSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetAllDiscountsSecurity struct {
    Option1 *GetAllDiscountsSecurityOption1 `security:"option"`
    Option2 *GetAllDiscountsSecurityOption2 `security:"option"`
    
}

type GetAllDiscountsRequest struct {
    PathParams GetAllDiscountsPathParams 
    Security GetAllDiscountsSecurity 
    
}

type GetAllDiscountsResponse struct {
    ContentType string 
    DiscountResponses []shared.DiscountResponse 
    StatusCode int64 
    
}

