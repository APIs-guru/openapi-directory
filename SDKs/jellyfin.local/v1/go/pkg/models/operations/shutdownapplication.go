package operations

import (
"openapi/pkg/models/shared")

type ShutdownApplicationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type ShutdownApplicationRequest struct {
    Security ShutdownApplicationSecurity 
    
}

type ShutdownApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

