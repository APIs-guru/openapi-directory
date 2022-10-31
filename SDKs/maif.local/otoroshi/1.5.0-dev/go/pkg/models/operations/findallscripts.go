package operations

import (
"openapi/pkg/models/shared")

type FindAllScriptsSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindAllScriptsRequest struct {
    Security FindAllScriptsSecurity 
    
}

type FindAllScriptsResponse struct {
    ContentType string 
    Scripts []shared.Script 
    StatusCode int64 
    
}

