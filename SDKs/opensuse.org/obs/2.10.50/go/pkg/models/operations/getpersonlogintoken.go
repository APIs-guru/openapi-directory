package operations

import (
"openapi/pkg/models/shared")

type GetPersonLoginTokenPathParams struct {
    Login string `pathParam:"style=simple,explode=false,name=login"`
    
}

type GetPersonLoginTokenSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetPersonLoginTokenRequest struct {
    PathParams GetPersonLoginTokenPathParams 
    Security GetPersonLoginTokenSecurity 
    
}

type GetPersonLoginTokenResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

