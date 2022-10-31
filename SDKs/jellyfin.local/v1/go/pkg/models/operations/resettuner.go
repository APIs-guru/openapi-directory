package operations

import (
"openapi/pkg/models/shared")

type ResetTunerPathParams struct {
    TunerID string `pathParam:"style=simple,explode=false,name=tunerId"`
    
}

type ResetTunerSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type ResetTunerRequest struct {
    PathParams ResetTunerPathParams 
    Security ResetTunerSecurity 
    
}

type ResetTunerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

