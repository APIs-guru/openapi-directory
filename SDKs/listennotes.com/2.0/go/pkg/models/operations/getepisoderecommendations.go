package operations

import (
"openapi/pkg/models/shared")

type GetEpisodeRecommendationsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetEpisodeRecommendationsQueryParams struct {
    SafeMode *int64 `queryParam:"style=form,explode=true,name=safe_mode"`
    
}

type GetEpisodeRecommendationsHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetEpisodeRecommendationsRequest struct {
    PathParams GetEpisodeRecommendationsPathParams 
    QueryParams GetEpisodeRecommendationsQueryParams 
    Headers GetEpisodeRecommendationsHeaders 
    
}

type GetEpisodeRecommendationsResponse struct {
    ContentType string 
    GetEpisodeRecommendationsResponse *shared.GetEpisodeRecommendationsResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

