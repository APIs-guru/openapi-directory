package operations

import (
"openapi/pkg/models/shared")

type UpdateStackScriptPathParams struct {
    StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
    
}

type UpdateStackScriptSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateStackScriptSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateStackScriptSecurity struct {
    Option1 *UpdateStackScriptSecurityOption1 `security:"option"`
    Option2 *UpdateStackScriptSecurityOption2 `security:"option"`
    
}

type UpdateStackScriptRequest struct {
    PathParams UpdateStackScriptPathParams 
    Request *shared.StackScript `request:"mediaType=application/json"`
    Security UpdateStackScriptSecurity 
    
}

type UpdateStackScriptDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateStackScriptResponse struct {
    ContentType string 
    StackScript *shared.StackScript 
    StatusCode int64 
    UpdateStackScriptDefaultApplicationJSONObject *UpdateStackScriptDefaultApplicationJSON 
    
}

