package operations

import (
"openapi/pkg/models/shared")

type GetStartupConfigurationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetStartupConfigurationRequest struct {
    Security GetStartupConfigurationSecurity 
    
}

type GetStartupConfigurationResponse struct {
    ContentType string 
    StartupConfigurationDto *shared.StartupConfigurationDto 
    StatusCode int64 
    
}

