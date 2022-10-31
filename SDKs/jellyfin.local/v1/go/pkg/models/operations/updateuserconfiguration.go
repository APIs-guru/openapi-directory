package operations

import (
"openapi/pkg/models/shared")

type UpdateUserConfigurationPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UpdateUserConfigurationRequests struct {
    UserConfiguration *shared.UserConfiguration `request:"mediaType=application/*+json"`
    UserConfiguration1 *shared.UserConfiguration `request:"mediaType=application/json"`
    UserConfiguration2 *shared.UserConfiguration `request:"mediaType=text/json"`
    
}

type UpdateUserConfigurationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateUserConfigurationRequest struct {
    PathParams UpdateUserConfigurationPathParams 
    Request UpdateUserConfigurationRequests 
    Security UpdateUserConfigurationSecurity 
    
}

type UpdateUserConfigurationResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

