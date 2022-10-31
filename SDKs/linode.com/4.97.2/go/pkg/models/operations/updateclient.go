package operations

import (
"openapi/pkg/models/shared")

type UpdateClientPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    
}

type UpdateClientSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateClientSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateClientSecurity struct {
    Option1 *UpdateClientSecurityOption1 `security:"option"`
    Option2 *UpdateClientSecurityOption2 `security:"option"`
    
}

type UpdateClientRequest struct {
    PathParams UpdateClientPathParams 
    Request *shared.OAuthClient `request:"mediaType=application/json"`
    Security UpdateClientSecurity 
    
}

type UpdateClientDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateClientResponse struct {
    ContentType string 
    OAuthClient *shared.OAuthClient 
    StatusCode int64 
    UpdateClientDefaultApplicationJSONObject *UpdateClientDefaultApplicationJSON 
    
}

