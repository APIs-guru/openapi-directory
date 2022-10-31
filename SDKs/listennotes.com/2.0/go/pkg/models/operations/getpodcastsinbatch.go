package operations

import (
"openapi/pkg/models/shared")

type GetPodcastsInBatchHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetPodcastsInBatchRequest struct {
    Headers GetPodcastsInBatchHeaders 
    Request *shared.GetPodcastsInBatchForm `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type GetPodcastsInBatchResponse struct {
    ContentType string 
    GetPodcastsInBatchResponse *shared.GetPodcastsInBatchResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

