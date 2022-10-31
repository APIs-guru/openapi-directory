package operations

import (
"openapi/pkg/models/shared")

type GetPluginsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPluginsRequest struct {
    Security GetPluginsSecurity 
    
}

type GetPluginsResponse struct {
    ContentType string 
    PluginInfos []shared.PluginInfo 
    StatusCode int64 
    
}

