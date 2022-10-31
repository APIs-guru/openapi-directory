package operations

import (
"openapi/pkg/models/shared")

type DeleteClientPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    
}

type DeleteClientSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteClientSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteClientSecurity struct {
    Option1 *DeleteClientSecurityOption1 `security:"option"`
    Option2 *DeleteClientSecurityOption2 `security:"option"`
    
}

type DeleteClientRequest struct {
    PathParams DeleteClientPathParams 
    Security DeleteClientSecurity 
    
}

type DeleteClientDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteClientResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteClient200ApplicationJSONObject map[string]interface{} 
    DeleteClientDefaultApplicationJSONObject *DeleteClientDefaultApplicationJSON 
    
}

