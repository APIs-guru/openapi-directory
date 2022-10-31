package operations

import (
"openapi/pkg/models/shared")

type GetEpisodeByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetEpisodeByIDQueryParams struct {
    ShowTranscript *int64 `queryParam:"style=form,explode=false,name=show_transcript"`
    
}

type GetEpisodeByIDHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetEpisodeByIDRequest struct {
    PathParams GetEpisodeByIDPathParams 
    QueryParams GetEpisodeByIDQueryParams 
    Headers GetEpisodeByIDHeaders 
    
}

type GetEpisodeByIDResponse struct {
    ContentType string 
    EpisodeFull *shared.EpisodeFull 
    Headers map[string][]string 
    StatusCode int64 
    
}

