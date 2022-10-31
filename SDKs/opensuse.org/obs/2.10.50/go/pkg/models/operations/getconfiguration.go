package operations

import (
"openapi/pkg/models/shared")

type GetConfigurationSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetConfigurationRequest struct {
    Security GetConfigurationSecurity 
    
}

type GetConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

