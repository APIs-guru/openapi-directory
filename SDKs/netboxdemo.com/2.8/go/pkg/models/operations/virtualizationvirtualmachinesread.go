package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationVirtualMachinesReadRequest struct {
	PathParams VirtualizationVirtualMachinesReadPathParams
}

type VirtualizationVirtualMachinesReadResponse struct {
	ContentType                     string
	StatusCode                      int64
	VirtualMachineWithConfigContext *shared.VirtualMachineWithConfigContext
}
