package operations

import (
"openapi/pkg/models/shared")

type AddUserSecurity struct {
    CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type AddUserRequest struct {
    Request shared.User `request:"mediaType=application/json"`
    Security AddUserSecurity 
    
}

type AddUserResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

