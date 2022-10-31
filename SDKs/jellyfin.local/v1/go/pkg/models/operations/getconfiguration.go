package operations

import (
"openapi/pkg/models/shared")

type GetConfigurationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetConfigurationRequest struct {
    Security GetConfigurationSecurity 
    
}

type GetConfigurationResponse struct {
    ContentType string 
    ServerConfiguration *shared.ServerConfiguration 
    StatusCode int64 
    
}

