package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesCreateRequest struct {
	Request shared.WritableVirtualMachineInput `request:"mediaType=application/json"`
}

type VirtualizationVirtualMachinesCreateResponse struct {
	ContentType    string
	StatusCode     int64
	VirtualMachine *shared.VirtualMachine
}
