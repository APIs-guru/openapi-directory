package operations

import (
"openapi/pkg/models/shared")

type ExtrasGraphsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasGraphsReadRequest struct {
    PathParams ExtrasGraphsReadPathParams 
    
}

type ExtrasGraphsReadResponse struct {
    ContentType string 
    Graph *shared.Graph 
    StatusCode int64 
    
}

