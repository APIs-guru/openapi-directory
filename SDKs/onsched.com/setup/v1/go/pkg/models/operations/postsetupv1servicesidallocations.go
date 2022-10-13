package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ServicesIDAllocationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ServicesIDAllocationsRequests struct {
	ServiceAllocationInputModel  *shared.ServiceAllocationInputModel `request:"mediaType=application/*+json"`
	ServiceAllocationInputModel1 *shared.ServiceAllocationInputModel `request:"mediaType=application/json"`
	ServiceAllocationInputModel2 *shared.ServiceAllocationInputModel `request:"mediaType=application/json-patch+json"`
	ServiceAllocationInputModel3 *shared.ServiceAllocationInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ServicesIDAllocationsRequest struct {
	PathParams PostSetupV1ServicesIDAllocationsPathParams
	Request    *PostSetupV1ServicesIDAllocationsRequests
}

type PostSetupV1ServicesIDAllocationsResponse struct {
	ContentType                string
	ServiceAllocationViewModel *shared.ServiceAllocationViewModel
	StatusCode                 int64
}
