package operations

import (
"openapi/pkg/models/shared")

type DeleteScriptPathParams struct {
    ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
    
}

type DeleteScriptSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteScriptRequest struct {
    PathParams DeleteScriptPathParams 
    Security DeleteScriptSecurity 
    
}

type DeleteScriptResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

