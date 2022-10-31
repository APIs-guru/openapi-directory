package operations

import (
"openapi/pkg/models/shared")

type GetSuggestionsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetSuggestionsQueryParams struct {
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MediaType []string `queryParam:"style=form,explode=true,name=mediaType"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    Type []string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetSuggestionsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSuggestionsRequest struct {
    PathParams GetSuggestionsPathParams 
    QueryParams GetSuggestionsQueryParams 
    Security GetSuggestionsSecurity 
    
}

type GetSuggestionsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

