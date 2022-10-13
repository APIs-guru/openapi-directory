package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ServicesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ServicesIDRequests struct {
	ServiceUpdateModel  *shared.ServiceUpdateModel `request:"mediaType=application/*+json"`
	ServiceUpdateModel1 *shared.ServiceUpdateModel `request:"mediaType=application/json"`
	ServiceUpdateModel2 *shared.ServiceUpdateModel `request:"mediaType=application/json-patch+json"`
	ServiceUpdateModel3 *shared.ServiceUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ServicesIDRequest struct {
	PathParams PutSetupV1ServicesIDPathParams
	Request    *PutSetupV1ServicesIDRequests
}

type PutSetupV1ServicesIDResponse struct {
	ContentType      string
	ServiceViewModel *shared.ServiceViewModel
	StatusCode       int64
}
