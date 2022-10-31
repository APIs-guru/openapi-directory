package operations

import (
"openapi/pkg/models/shared")

type DeleteDiscountPathParams struct {
    DiscountUUID string `pathParam:"style=simple,explode=false,name=discountUuid"`
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type DeleteDiscountSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteDiscountSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type DeleteDiscountSecurity struct {
    Option1 *DeleteDiscountSecurityOption1 `security:"option"`
    Option2 *DeleteDiscountSecurityOption2 `security:"option"`
    
}

type DeleteDiscountRequest struct {
    PathParams DeleteDiscountPathParams 
    Security DeleteDiscountSecurity 
    
}

type DeleteDiscountResponse struct {
    ContentType string 
    StatusCode int64 
    
}

