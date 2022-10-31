package operations

import (
"openapi/pkg/models/shared")

type GetSimilarArtistsPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetSimilarArtistsQueryParams struct {
    ExcludeArtistIds []string `queryParam:"style=form,explode=true,name=excludeArtistIds"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetSimilarArtistsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSimilarArtistsRequest struct {
    PathParams GetSimilarArtistsPathParams 
    QueryParams GetSimilarArtistsQueryParams 
    Security GetSimilarArtistsSecurity 
    
}

type GetSimilarArtistsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

