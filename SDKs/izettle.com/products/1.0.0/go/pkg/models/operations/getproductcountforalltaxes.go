package operations

import (
"openapi/pkg/models/shared")

type GetProductCountForAllTaxesSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetProductCountForAllTaxesSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetProductCountForAllTaxesSecurity struct {
    Option1 *GetProductCountForAllTaxesSecurityOption1 `security:"option"`
    Option2 *GetProductCountForAllTaxesSecurityOption2 `security:"option"`
    
}

type GetProductCountForAllTaxesRequest struct {
    Security GetProductCountForAllTaxesSecurity 
    
}

type GetProductCountForAllTaxesResponse struct {
    ContentType string 
    StatusCode int64 
    TaxRateProductCountResponse *shared.TaxRateProductCountResponse 
    
}

