package operations

import (
"openapi/pkg/models/shared")

type VirtualizationInterfacesCreateRequest struct {
    Request shared.WritableVirtualMachineInterface `request:"mediaType=application/json"`
    
}

type VirtualizationInterfacesCreateResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualMachineInterface *shared.VirtualMachineInterface 
    
}

