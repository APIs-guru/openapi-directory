package operations

import (
"openapi/pkg/models/shared")

type DeletePodcastByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePodcastByIDQueryParams struct {
    Reason *string `queryParam:"style=form,explode=true,name=reason"`
    
}

type DeletePodcastByIDHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type DeletePodcastByIDRequest struct {
    PathParams DeletePodcastByIDPathParams 
    QueryParams DeletePodcastByIDQueryParams 
    Headers DeletePodcastByIDHeaders 
    
}

type DeletePodcastByIDResponse struct {
    ContentType string 
    DeletePodcastResponse *shared.DeletePodcastResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

