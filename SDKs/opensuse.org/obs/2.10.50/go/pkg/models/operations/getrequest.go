package operations

import (
"openapi/pkg/models/shared")

type GetRequestSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetRequestRequest struct {
    Security GetRequestSecurity 
    
}

type GetRequestResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

