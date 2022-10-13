package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ServicesAllocationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ServicesAllocationsIDRequests struct {
	ServiceAllocationUpdateModel  *shared.ServiceAllocationUpdateModel `request:"mediaType=application/*+json"`
	ServiceAllocationUpdateModel1 *shared.ServiceAllocationUpdateModel `request:"mediaType=application/json"`
	ServiceAllocationUpdateModel2 *shared.ServiceAllocationUpdateModel `request:"mediaType=application/json-patch+json"`
	ServiceAllocationUpdateModel3 *shared.ServiceAllocationUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ServicesAllocationsIDRequest struct {
	PathParams PutSetupV1ServicesAllocationsIDPathParams
	Request    *PutSetupV1ServicesAllocationsIDRequests
}

type PutSetupV1ServicesAllocationsIDResponse struct {
	ContentType                string
	ServiceAllocationViewModel *shared.ServiceAllocationViewModel
	StatusCode                 int64
}
