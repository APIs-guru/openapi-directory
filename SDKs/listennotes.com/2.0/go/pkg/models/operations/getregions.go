package operations

import (
"openapi/pkg/models/shared")

type GetRegionsHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetRegionsRequest struct {
    Headers GetRegionsHeaders 
    
}

type GetRegionsResponse struct {
    ContentType string 
    GetRegionsResponse *shared.GetRegionsResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

