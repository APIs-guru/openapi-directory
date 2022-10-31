package operations

import (
"openapi/pkg/models/shared")

type DeleteUserPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteUserSecurity struct {
    CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type DeleteUserRequest struct {
    PathParams DeleteUserPathParams 
    Security DeleteUserSecurity 
    
}

type DeleteUserResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

