package operations

import (
"openapi/pkg/models/shared")

type VirtualizationInterfacesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationInterfacesUpdateRequest struct {
    PathParams VirtualizationInterfacesUpdatePathParams 
    Request shared.WritableVirtualMachineInterface `request:"mediaType=application/json"`
    
}

type VirtualizationInterfacesUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualMachineInterface *shared.VirtualMachineInterface 
    
}

