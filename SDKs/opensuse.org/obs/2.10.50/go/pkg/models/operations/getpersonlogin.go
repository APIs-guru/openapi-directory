package operations

import (
"openapi/pkg/models/shared")

type GetPersonLoginPathParams struct {
    Login string `pathParam:"style=simple,explode=false,name=login"`
    
}

type GetPersonLoginSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetPersonLoginRequest struct {
    PathParams GetPersonLoginPathParams 
    Security GetPersonLoginSecurity 
    
}

type GetPersonLoginResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

