package operations

import (
"time"
"openapi/pkg/models/shared")

type GetLiveTvProgramsQueryParams struct {
    ChannelIds []string `queryParam:"style=form,explode=true,name=channelIds"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GenreIds []string `queryParam:"style=form,explode=true,name=genreIds"`
    Genres []string `queryParam:"style=form,explode=true,name=genres"`
    HasAired *bool `queryParam:"style=form,explode=true,name=hasAired"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsAiring *bool `queryParam:"style=form,explode=true,name=isAiring"`
    IsKids *bool `queryParam:"style=form,explode=true,name=isKids"`
    IsMovie *bool `queryParam:"style=form,explode=true,name=isMovie"`
    IsNews *bool `queryParam:"style=form,explode=true,name=isNews"`
    IsSeries *bool `queryParam:"style=form,explode=true,name=isSeries"`
    IsSports *bool `queryParam:"style=form,explode=true,name=isSports"`
    LibrarySeriesID *string `queryParam:"style=form,explode=true,name=librarySeriesId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MaxEndDate *time.Time `queryParam:"style=form,explode=true,name=maxEndDate"`
    MaxStartDate *time.Time `queryParam:"style=form,explode=true,name=maxStartDate"`
    MinEndDate *time.Time `queryParam:"style=form,explode=true,name=minEndDate"`
    MinStartDate *time.Time `queryParam:"style=form,explode=true,name=minStartDate"`
    SeriesTimerID *string `queryParam:"style=form,explode=true,name=seriesTimerId"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sortOrder"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetLiveTvProgramsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLiveTvProgramsRequest struct {
    QueryParams GetLiveTvProgramsQueryParams 
    Security GetLiveTvProgramsSecurity 
    
}

type GetLiveTvProgramsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

