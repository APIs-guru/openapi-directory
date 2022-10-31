package operations

import (
"openapi/pkg/models/shared")

type CreateTagPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type CreateTagQueryParams struct {
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type CreateTagHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type CreateTagRequest struct {
    PathParams CreateTagPathParams 
    QueryParams CreateTagQueryParams 
    Headers CreateTagHeaders 
    
}

type CreateTagResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}

