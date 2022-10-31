package operations

import (
"openapi/pkg/models/shared")

type GetBuildSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetBuildRequest struct {
    Security GetBuildSecurity 
    
}

type GetBuildResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

