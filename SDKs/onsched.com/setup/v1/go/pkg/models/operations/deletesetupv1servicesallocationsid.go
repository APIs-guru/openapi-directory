package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1ServicesAllocationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1ServicesAllocationsIDRequest struct {
	PathParams DeleteSetupV1ServicesAllocationsIDPathParams
}

type DeleteSetupV1ServicesAllocationsIDResponse struct {
	ContentType                string
	ServiceAllocationViewModel *shared.ServiceAllocationViewModel
	StatusCode                 int64
}
