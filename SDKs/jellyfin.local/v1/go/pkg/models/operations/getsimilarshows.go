package operations

import (
"openapi/pkg/models/shared")

type GetSimilarShowsPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetSimilarShowsQueryParams struct {
    ExcludeArtistIds []string `queryParam:"style=form,explode=true,name=excludeArtistIds"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetSimilarShowsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSimilarShowsRequest struct {
    PathParams GetSimilarShowsPathParams 
    QueryParams GetSimilarShowsQueryParams 
    Security GetSimilarShowsSecurity 
    
}

type GetSimilarShowsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

