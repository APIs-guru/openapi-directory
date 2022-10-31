package operations

import (
"openapi/pkg/models/shared")

type GetKvPairsByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetKvPairsByIDRequest struct {
    PathParams GetKvPairsByIDPathParams 
    
}

type GetKvPairsByIDResponse struct {
    ContentType string 
    KeyValuePair *shared.KeyValuePair 
    StatusCode int64 
    
}

