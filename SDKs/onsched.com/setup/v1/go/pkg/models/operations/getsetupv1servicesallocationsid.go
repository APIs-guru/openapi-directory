package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesAllocationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesAllocationsIDRequest struct {
	PathParams GetSetupV1ServicesAllocationsIDPathParams
}

type GetSetupV1ServicesAllocationsIDResponse struct {
	ContentType                string
	ServiceAllocationViewModel *shared.ServiceAllocationViewModel
	StatusCode                 int64
}
