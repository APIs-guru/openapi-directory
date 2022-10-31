package operations

import (
"openapi/pkg/models/shared")

type CreatePersonalAccessTokenSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreatePersonalAccessTokenSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreatePersonalAccessTokenSecurity struct {
    Option1 *CreatePersonalAccessTokenSecurityOption1 `security:"option"`
    Option2 *CreatePersonalAccessTokenSecurityOption2 `security:"option"`
    
}

type CreatePersonalAccessTokenRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    Security CreatePersonalAccessTokenSecurity 
    
}

type CreatePersonalAccessTokenDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreatePersonalAccessTokenResponse struct {
    ContentType string 
    PersonalAccessToken *shared.PersonalAccessToken 
    StatusCode int64 
    CreatePersonalAccessTokenDefaultApplicationJSONObject *CreatePersonalAccessTokenDefaultApplicationJSON 
    
}

