package operations

import (
"openapi/pkg/models/shared")

type GetLocalizationOptionsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLocalizationOptionsRequest struct {
    Security GetLocalizationOptionsSecurity 
    
}

type GetLocalizationOptionsResponse struct {
    ContentType string 
    LocalizationOptions []shared.LocalizationOption 
    StatusCode int64 
    
}

