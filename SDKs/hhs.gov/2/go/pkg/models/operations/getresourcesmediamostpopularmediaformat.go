package operations

import (
"openapi/pkg/models/shared")

type GetResourcesMediaMostPopularMediaFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetResourcesMediaMostPopularMediaFormatQueryParams struct {
    Max *int32 `queryParam:"style=form,explode=false,name=max"`
    Offset *int32 `queryParam:"style=form,explode=false,name=offset"`
    
}

type GetResourcesMediaMostPopularMediaFormatRequest struct {
    PathParams GetResourcesMediaMostPopularMediaFormatPathParams 
    QueryParams GetResourcesMediaMostPopularMediaFormatQueryParams 
    
}

type GetResourcesMediaMostPopularMediaFormatResponse struct {
    ContentType string 
    MediaItemWrappeds []shared.MediaItemWrapped 
    StatusCode int64 
    
}

