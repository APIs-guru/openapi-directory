package operations

import (
"openapi/pkg/models/shared")

type CreateUserSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateUserSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateUserSecurity struct {
    Option1 *CreateUserSecurityOption1 `security:"option"`
    Option2 *CreateUserSecurityOption2 `security:"option"`
    
}

type CreateUserRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security CreateUserSecurity 
    
}

type CreateUserDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateUserResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    CreateUserDefaultApplicationJSONObject *CreateUserDefaultApplicationJSON 
    
}

