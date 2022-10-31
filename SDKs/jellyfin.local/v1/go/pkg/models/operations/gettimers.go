package operations

import (
"openapi/pkg/models/shared")

type GetTimersQueryParams struct {
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    IsActive *bool `queryParam:"style=form,explode=true,name=isActive"`
    IsScheduled *bool `queryParam:"style=form,explode=true,name=isScheduled"`
    SeriesTimerID *string `queryParam:"style=form,explode=true,name=seriesTimerId"`
    
}

type GetTimersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTimersRequest struct {
    QueryParams GetTimersQueryParams 
    Security GetTimersSecurity 
    
}

type GetTimersResponse struct {
    ContentType string 
    StatusCode int64 
    TimerInfoDtoQueryResult *shared.TimerInfoDtoQueryResult 
    
}

