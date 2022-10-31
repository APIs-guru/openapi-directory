package operations

import (
"openapi/pkg/models/shared")

type UpdateUserPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateUserSecurity struct {
    CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type UpdateUserRequest struct {
    PathParams UpdateUserPathParams 
    Request shared.User `request:"mediaType=application/json"`
    Security UpdateUserSecurity 
    
}

type UpdateUserResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

