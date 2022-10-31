package operations

import (
"openapi/pkg/models/shared")

type PutPersonLoginPathParams struct {
    Login string `pathParam:"style=simple,explode=false,name=login"`
    
}

type PutPersonLoginSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PutPersonLoginRequest struct {
    PathParams PutPersonLoginPathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PutPersonLoginSecurity 
    
}

type PutPersonLoginResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

