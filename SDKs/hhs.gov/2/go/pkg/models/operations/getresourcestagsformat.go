package operations

import (
"openapi/pkg/models/shared")

type GetResourcesTagsFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetResourcesTagsFormatQueryParams struct {
    Max *int32 `queryParam:"style=form,explode=false,name=max"`
    MediaID *int64 `queryParam:"style=form,explode=false,name=mediaId"`
    Name *string `queryParam:"style=form,explode=false,name=name"`
    NameContains *string `queryParam:"style=form,explode=false,name=nameContains"`
    Offset *int32 `queryParam:"style=form,explode=false,name=offset"`
    Sort *string `queryParam:"style=form,explode=false,name=sort"`
    TypeID *int64 `queryParam:"style=form,explode=false,name=typeId"`
    TypeName *string `queryParam:"style=form,explode=false,name=typeName"`
    
}

type GetResourcesTagsFormatRequest struct {
    PathParams GetResourcesTagsFormatPathParams 
    QueryParams GetResourcesTagsFormatQueryParams 
    
}

type GetResourcesTagsFormatResponse struct {
    ContentType string 
    StatusCode int64 
    TagMarshallerWrappeds []shared.TagMarshallerWrapped 
    
}

