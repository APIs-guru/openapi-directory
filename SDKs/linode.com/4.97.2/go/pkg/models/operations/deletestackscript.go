package operations

import (
"openapi/pkg/models/shared")

type DeleteStackScriptPathParams struct {
    StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
    
}

type DeleteStackScriptSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteStackScriptSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteStackScriptSecurity struct {
    Option1 *DeleteStackScriptSecurityOption1 `security:"option"`
    Option2 *DeleteStackScriptSecurityOption2 `security:"option"`
    
}

type DeleteStackScriptRequest struct {
    PathParams DeleteStackScriptPathParams 
    Security DeleteStackScriptSecurity 
    
}

type DeleteStackScriptDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteStackScriptResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteStackScript200ApplicationJSONObject map[string]interface{} 
    DeleteStackScriptDefaultApplicationJSONObject *DeleteStackScriptDefaultApplicationJSON 
    
}

