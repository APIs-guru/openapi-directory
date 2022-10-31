package operations

import (
"openapi/pkg/models/shared")

type DeleteSpotListPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSpotListRequest struct {
    PathParams DeleteSpotListPathParams 
    
}

type DeleteSpotListResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

