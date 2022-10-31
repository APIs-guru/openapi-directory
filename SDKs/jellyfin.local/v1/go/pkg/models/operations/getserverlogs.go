package operations

import (
"openapi/pkg/models/shared")

type GetServerLogsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetServerLogsRequest struct {
    Security GetServerLogsSecurity 
    
}

type GetServerLogsResponse struct {
    ContentType string 
    LogFiles []shared.LogFile 
    StatusCode int64 
    
}

