package operations

import (
"openapi/pkg/models/shared")

type JustListenHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type JustListenRequest struct {
    Headers JustListenHeaders 
    
}

type JustListenResponse struct {
    ContentType string 
    EpisodeSimple *shared.EpisodeSimple 
    Headers map[string][]string 
    StatusCode int64 
    
}

