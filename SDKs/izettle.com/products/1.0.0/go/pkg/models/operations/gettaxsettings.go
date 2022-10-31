package operations

import (
"openapi/pkg/models/shared")

type GetTaxSettingsSecurityOption1 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetTaxSettingsSecurityOption2 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTaxSettingsSecurity struct {
    Option1 *GetTaxSettingsSecurityOption1 `security:"option"`
    Option2 *GetTaxSettingsSecurityOption2 `security:"option"`
    
}

type GetTaxSettingsRequest struct {
    Security GetTaxSettingsSecurity 
    
}

type GetTaxSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    TaxSettingsResponse *shared.TaxSettingsResponse 
    
}

