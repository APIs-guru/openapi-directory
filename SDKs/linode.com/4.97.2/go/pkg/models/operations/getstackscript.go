package operations

import (
"openapi/pkg/models/shared")

type GetStackScriptPathParams struct {
    StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
    
}

type GetStackScriptSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetStackScriptSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetStackScriptSecurity struct {
    Option1 *GetStackScriptSecurityOption1 `security:"option"`
    Option2 *GetStackScriptSecurityOption2 `security:"option"`
    
}

type GetStackScriptRequest struct {
    PathParams GetStackScriptPathParams 
    Security GetStackScriptSecurity 
    
}

type GetStackScriptDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetStackScriptResponse struct {
    ContentType string 
    StackScript *shared.StackScript 
    StatusCode int64 
    GetStackScriptDefaultApplicationJSONObject *GetStackScriptDefaultApplicationJSON 
    
}

