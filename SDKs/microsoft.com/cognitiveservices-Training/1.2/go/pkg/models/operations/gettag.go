package operations

import (
"openapi/pkg/models/shared")

type GetTagPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TagID string `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type GetTagQueryParams struct {
    IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
    
}

type GetTagHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type GetTagRequest struct {
    PathParams GetTagPathParams 
    QueryParams GetTagQueryParams 
    Headers GetTagHeaders 
    
}

type GetTagResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}

