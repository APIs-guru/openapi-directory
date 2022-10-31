package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1ServicesAllocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1ServicesAllocationsIDRequest struct {
    PathParams GetConsumerV1ServicesAllocationsIDPathParams 
    
}

type GetConsumerV1ServicesAllocationsIDResponse struct {
    ContentType string 
    ServiceAllocationViewModel *shared.ServiceAllocationViewModel 
    StatusCode int64 
    
}

