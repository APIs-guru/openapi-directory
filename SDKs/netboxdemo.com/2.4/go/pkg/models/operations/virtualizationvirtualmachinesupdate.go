package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationVirtualMachinesUpdateRequest struct {
	PathParams VirtualizationVirtualMachinesUpdatePathParams
	Request    shared.WritableVirtualMachineInput `request:"mediaType=application/json"`
}

type VirtualizationVirtualMachinesUpdateResponse struct {
	ContentType    string
	StatusCode     int64
	VirtualMachine *shared.VirtualMachine
}
