package operations

import (
"openapi/pkg/models/shared")

type UpdateKvPairPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateKvPairRequest struct {
    PathParams UpdateKvPairPathParams 
    Request shared.KeyValuePairUpdate `request:"mediaType=application/json"`
    
}

type UpdateKvPairResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

