package operations

import (
"openapi/pkg/models/shared")

type GetResourcesTagsIDFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesTagsIDFormatRequest struct {
    PathParams GetResourcesTagsIDFormatPathParams 
    
}

type GetResourcesTagsIDFormatResponse struct {
    ContentType string 
    StatusCode int64 
    TagMarshallerWrappeds []shared.TagMarshallerWrapped 
    
}

