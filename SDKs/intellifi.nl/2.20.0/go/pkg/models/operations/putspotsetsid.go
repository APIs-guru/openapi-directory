package operations

import (
"openapi/pkg/models/shared")

type PutSpotsetsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSpotsetsIDRequest struct {
    PathParams PutSpotsetsIDPathParams 
    Request shared.SpotSetUpdate `request:"mediaType=application/json"`
    
}

type PutSpotsetsIDResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

