package operations

import (
"openapi/pkg/models/shared")

type GetTaxRatesSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTaxRatesSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetTaxRatesSecurity struct {
    Option1 *GetTaxRatesSecurityOption1 `security:"option"`
    Option2 *GetTaxRatesSecurityOption2 `security:"option"`
    
}

type GetTaxRatesRequest struct {
    Security GetTaxRatesSecurity 
    
}

type GetTaxRatesResponse struct {
    ContentType string 
    StatusCode int64 
    TaxRatesResponses []shared.TaxRatesResponse 
    
}

