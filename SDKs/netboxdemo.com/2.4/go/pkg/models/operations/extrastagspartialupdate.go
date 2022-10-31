package operations

import (
"openapi/pkg/models/shared")

type ExtrasTagsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasTagsPartialUpdateRequest struct {
    PathParams ExtrasTagsPartialUpdatePathParams 
    Request shared.Tag `request:"mediaType=application/json"`
    
}

type ExtrasTagsPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}

