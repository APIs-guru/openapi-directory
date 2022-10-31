package operations

import (
"openapi/pkg/models/shared")

type GetResourcesTagsIDMediaFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesTagsIDMediaFormatQueryParams struct {
    Max *int32 `queryParam:"style=form,explode=false,name=max"`
    Offset *int32 `queryParam:"style=form,explode=false,name=offset"`
    Sort *string `queryParam:"style=form,explode=false,name=sort"`
    
}

type GetResourcesTagsIDMediaFormatRequest struct {
    PathParams GetResourcesTagsIDMediaFormatPathParams 
    QueryParams GetResourcesTagsIDMediaFormatQueryParams 
    
}

type GetResourcesTagsIDMediaFormatResponse struct {
    ContentType string 
    MediaItemWrappeds []shared.MediaItemWrapped 
    StatusCode int64 
    
}

