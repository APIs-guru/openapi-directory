package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcesAllocationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcesAllocationsIDRequests struct {
	ResourceAllocationUpdateModel  *shared.ResourceAllocationUpdateModel `request:"mediaType=application/*+json"`
	ResourceAllocationUpdateModel1 *shared.ResourceAllocationUpdateModel `request:"mediaType=application/json"`
	ResourceAllocationUpdateModel2 *shared.ResourceAllocationUpdateModel `request:"mediaType=application/json-patch+json"`
	ResourceAllocationUpdateModel3 *shared.ResourceAllocationUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ResourcesAllocationsIDRequest struct {
	PathParams PutSetupV1ResourcesAllocationsIDPathParams
	Request    *PutSetupV1ResourcesAllocationsIDRequests
}

type PutSetupV1ResourcesAllocationsIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
