package operations

import (
"openapi/pkg/models/shared")

type GetProjectsHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type GetProjectsRequest struct {
    Headers GetProjectsHeaders 
    
}

type GetProjectsResponse struct {
    Body []byte 
    ContentType string 
    Projects []shared.Project 
    StatusCode int64 
    
}

