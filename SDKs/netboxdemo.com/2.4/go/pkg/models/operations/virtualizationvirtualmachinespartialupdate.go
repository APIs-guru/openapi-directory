package operations

import (
"openapi/pkg/models/shared")

type VirtualizationVirtualMachinesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationVirtualMachinesPartialUpdateRequest struct {
    PathParams VirtualizationVirtualMachinesPartialUpdatePathParams 
    Request shared.WritableVirtualMachine `request:"mediaType=application/json"`
    
}

type VirtualizationVirtualMachinesPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualMachine *shared.VirtualMachine 
    
}

