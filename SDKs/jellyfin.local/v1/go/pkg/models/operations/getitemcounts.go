package operations

import (
"openapi/pkg/models/shared")

type GetItemCountsQueryParams struct {
    IsFavorite *bool `queryParam:"style=form,explode=true,name=isFavorite"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetItemCountsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetItemCountsRequest struct {
    QueryParams GetItemCountsQueryParams 
    Security GetItemCountsSecurity 
    
}

type GetItemCountsResponse struct {
    ContentType string 
    ItemCounts *shared.ItemCounts 
    StatusCode int64 
    
}

