package operations

import (
"openapi/pkg/models/shared")

type UpdatePluginConfigurationPathParams struct {
    PluginID string `pathParam:"style=simple,explode=false,name=pluginId"`
    
}

type UpdatePluginConfigurationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdatePluginConfigurationRequest struct {
    PathParams UpdatePluginConfigurationPathParams 
    Security UpdatePluginConfigurationSecurity 
    
}

type UpdatePluginConfigurationResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

