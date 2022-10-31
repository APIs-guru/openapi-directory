package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcesAllocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ResourcesAllocationsIDRequest struct {
    PathParams GetSetupV1ResourcesAllocationsIDPathParams 
    
}

type GetSetupV1ResourcesAllocationsIDResponse struct {
    ContentType string 
    ResourceAllocationViewModel *shared.ResourceAllocationViewModel 
    StatusCode int64 
    
}

