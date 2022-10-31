package operations

import (
"openapi/pkg/models/shared")

type GetLatestChannelItemsQueryParams struct {
    ChannelIds []string `queryParam:"style=form,explode=true,name=channelIds"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Filters []shared.ItemFilterEnum `queryParam:"style=form,explode=true,name=filters"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetLatestChannelItemsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLatestChannelItemsRequest struct {
    QueryParams GetLatestChannelItemsQueryParams 
    Security GetLatestChannelItemsSecurity 
    
}

type GetLatestChannelItemsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

