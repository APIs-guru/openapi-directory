package operations

import (
"openapi/pkg/models/shared")

type GetRecordingsQueryParams struct {
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsInProgress *bool `queryParam:"style=form,explode=true,name=isInProgress"`
    IsKids *bool `queryParam:"style=form,explode=true,name=isKids"`
    IsLibraryItem *bool `queryParam:"style=form,explode=true,name=isLibraryItem"`
    IsMovie *bool `queryParam:"style=form,explode=true,name=isMovie"`
    IsNews *bool `queryParam:"style=form,explode=true,name=isNews"`
    IsSeries *bool `queryParam:"style=form,explode=true,name=isSeries"`
    IsSports *bool `queryParam:"style=form,explode=true,name=isSports"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    SeriesTimerID *string `queryParam:"style=form,explode=true,name=seriesTimerId"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    Status *shared.RecordingStatusEnum `queryParam:"style=form,explode=true,name=status"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRecordingsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecordingsRequest struct {
    QueryParams GetRecordingsQueryParams 
    Security GetRecordingsSecurity 
    
}

type GetRecordingsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

