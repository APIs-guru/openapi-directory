package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1ServicesIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1ServicesIDRequest struct {
    PathParams GetConsumerV1ServicesIDPathParams 
    
}

type GetConsumerV1ServicesIDResponse struct {
    ContentType string 
    ServiceViewModel *shared.ServiceViewModel 
    StatusCode int64 
    
}

