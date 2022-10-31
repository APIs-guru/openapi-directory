package operations

import (
"openapi/pkg/models/shared")

type SyncPlayUnpauseSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayUnpauseRequest struct {
    Security SyncPlayUnpauseSecurity 
    
}

type SyncPlayUnpauseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

