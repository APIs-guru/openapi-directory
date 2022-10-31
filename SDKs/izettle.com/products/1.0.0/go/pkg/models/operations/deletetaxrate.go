package operations

import (
"openapi/pkg/models/shared")

type DeleteTaxRatePathParams struct {
    TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
    
}

type DeleteTaxRateSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteTaxRateSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type DeleteTaxRateSecurity struct {
    Option1 *DeleteTaxRateSecurityOption1 `security:"option"`
    Option2 *DeleteTaxRateSecurityOption2 `security:"option"`
    
}

type DeleteTaxRateRequest struct {
    PathParams DeleteTaxRatePathParams 
    Security DeleteTaxRateSecurity 
    
}

type DeleteTaxRateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

