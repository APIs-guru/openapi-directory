package operations

import (
"openapi/pkg/models/shared")

type GetSystemInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSystemInfoRequest struct {
    Security GetSystemInfoSecurity 
    
}

type GetSystemInfoResponse struct {
    ContentType string 
    StatusCode int64 
    SystemInfo *shared.SystemInfo 
    
}

