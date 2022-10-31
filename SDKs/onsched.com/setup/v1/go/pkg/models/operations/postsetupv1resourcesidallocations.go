package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcesIDAllocationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ResourcesIDAllocationsRequests struct {
	ResourceAllocationInputModel  *shared.ResourceAllocationInputModel `request:"mediaType=application/*+json"`
	ResourceAllocationInputModel1 *shared.ResourceAllocationInputModel `request:"mediaType=application/json"`
	ResourceAllocationInputModel2 *shared.ResourceAllocationInputModel `request:"mediaType=application/json-patch+json"`
	ResourceAllocationInputModel3 *shared.ResourceAllocationInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ResourcesIDAllocationsRequest struct {
	PathParams PostSetupV1ResourcesIDAllocationsPathParams
	Request    *PostSetupV1ResourcesIDAllocationsRequests
}

type PostSetupV1ResourcesIDAllocationsResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
