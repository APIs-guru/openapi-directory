package operations

import (
"openapi/pkg/models/shared")

type GetRecordingsSeriesQueryParams struct {
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsInProgress *bool `queryParam:"style=form,explode=true,name=isInProgress"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    SeriesTimerID *string `queryParam:"style=form,explode=true,name=seriesTimerId"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    Status *shared.RecordingStatusEnum `queryParam:"style=form,explode=true,name=status"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRecordingsSeriesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecordingsSeriesRequest struct {
    QueryParams GetRecordingsSeriesQueryParams 
    Security GetRecordingsSeriesSecurity 
    
}

type GetRecordingsSeriesResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

