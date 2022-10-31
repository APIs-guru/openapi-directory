package operations

import (
"openapi/pkg/models/shared")

type SubmitPodcastHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type SubmitPodcastRequest struct {
    Headers SubmitPodcastHeaders 
    Request shared.SubmitPodcastForm `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type SubmitPodcastResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    SubmitPodcastResponse *shared.SubmitPodcastResponse 
    
}

