package operations

import (
"openapi/pkg/models/shared")

type SetTaxationModeSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SetTaxationModeSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type SetTaxationModeSecurity struct {
    Option1 *SetTaxationModeSecurityOption1 `security:"option"`
    Option2 *SetTaxationModeSecurityOption2 `security:"option"`
    
}

type SetTaxationModeRequest struct {
    Request shared.TaxSettingsUpdateRequest `request:"mediaType=application/json"`
    Security SetTaxationModeSecurity 
    
}

type SetTaxationModeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    TaxSettingsResponse *shared.TaxSettingsResponse 
    
}

