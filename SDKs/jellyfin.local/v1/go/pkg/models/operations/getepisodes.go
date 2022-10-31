package operations

import (
"openapi/pkg/models/shared")

type GetEpisodesPathParams struct {
    SeriesID string `pathParam:"style=simple,explode=false,name=seriesId"`
    
}

type GetEpisodesQueryParams struct {
    AdjacentTo *string `queryParam:"style=form,explode=true,name=adjacentTo"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsMissing *bool `queryParam:"style=form,explode=true,name=isMissing"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Season *int32 `queryParam:"style=form,explode=true,name=season"`
    SeasonID *string `queryParam:"style=form,explode=true,name=seasonId"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    StartItemID *string `queryParam:"style=form,explode=true,name=startItemId"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetEpisodesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetEpisodesRequest struct {
    PathParams GetEpisodesPathParams 
    QueryParams GetEpisodesQueryParams 
    Security GetEpisodesSecurity 
    
}

type GetEpisodesResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

