package operations

import (
"openapi/pkg/models/shared")

type UninstallPluginPathParams struct {
    PluginID string `pathParam:"style=simple,explode=false,name=pluginId"`
    
}

type UninstallPluginSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UninstallPluginRequest struct {
    PathParams UninstallPluginPathParams 
    Security UninstallPluginSecurity 
    
}

type UninstallPluginResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

