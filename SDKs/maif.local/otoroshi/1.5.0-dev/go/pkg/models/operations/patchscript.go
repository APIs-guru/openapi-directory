package operations

import (
"openapi/pkg/models/shared")

type PatchScriptPathParams struct {
    ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
    
}

type PatchScriptSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PatchScriptRequest struct {
    PathParams PatchScriptPathParams 
    Request []shared.Patch `request:"mediaType=application/json"`
    Security PatchScriptSecurity 
    
}

type PatchScriptResponse struct {
    ContentType string 
    Script *shared.Script 
    StatusCode int64 
    
}

