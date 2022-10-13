package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesCreateRequest struct {
	Request shared.WritableVirtualMachineWithConfigContext `request:"mediaType=application/json"`
}

type VirtualizationVirtualMachinesCreateResponse struct {
	ContentType                     string
	StatusCode                      int64
	VirtualMachineWithConfigContext *shared.VirtualMachineWithConfigContext
}
