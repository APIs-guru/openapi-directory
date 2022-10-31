package operations

import (
"openapi/pkg/models/shared")

type GetSeasonsPathParams struct {
    SeriesID string `pathParam:"style=simple,explode=false,name=seriesId"`
    
}

type GetSeasonsQueryParams struct {
    AdjacentTo *string `queryParam:"style=form,explode=true,name=adjacentTo"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsMissing *bool `queryParam:"style=form,explode=true,name=isMissing"`
    IsSpecialSeason *bool `queryParam:"style=form,explode=true,name=isSpecialSeason"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetSeasonsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSeasonsRequest struct {
    PathParams GetSeasonsPathParams 
    QueryParams GetSeasonsQueryParams 
    Security GetSeasonsSecurity 
    
}

type GetSeasonsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

