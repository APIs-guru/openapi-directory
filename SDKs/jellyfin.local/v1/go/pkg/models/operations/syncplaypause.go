package operations

import (
"openapi/pkg/models/shared")

type SyncPlayPauseSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayPauseRequest struct {
    Security SyncPlayPauseSecurity 
    
}

type SyncPlayPauseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

