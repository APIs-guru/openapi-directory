package operations

import (
"openapi/pkg/models/shared")

type GetCulturesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetCulturesRequest struct {
    Security GetCulturesSecurity 
    
}

type GetCulturesResponse struct {
    ContentType string 
    CultureDtos []shared.CultureDto 
    StatusCode int64 
    
}

