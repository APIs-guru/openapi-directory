package operations

import (
"openapi/pkg/models/shared")

type DeleteLocationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteLocationRequest struct {
    PathParams DeleteLocationPathParams 
    
}

type DeleteLocationResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

