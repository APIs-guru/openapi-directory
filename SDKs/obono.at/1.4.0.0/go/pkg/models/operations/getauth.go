package operations

import (
"openapi/pkg/models/shared")

type GetAuthSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetAuthRequest struct {
    Security GetAuthSecurity 
    
}

type GetAuthResponse struct {
    AuthResult *shared.AuthResult 
    ContentType string 
    StatusCode int64 
    
}

