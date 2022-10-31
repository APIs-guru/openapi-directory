package operations

import (
"openapi/pkg/models/shared")

type CreateScriptSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateScriptRequest struct {
    Request *shared.Script `request:"mediaType=application/json"`
    Security CreateScriptSecurity 
    
}

type CreateScriptResponse struct {
    ContentType string 
    Script *shared.Script 
    StatusCode int64 
    
}

