package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ServicesBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ServicesBlockIDRequests struct {
	ServiceBlockUpdateModel  *shared.ServiceBlockUpdateModel `request:"mediaType=application/*+json"`
	ServiceBlockUpdateModel1 *shared.ServiceBlockUpdateModel `request:"mediaType=application/json"`
	ServiceBlockUpdateModel2 *shared.ServiceBlockUpdateModel `request:"mediaType=application/json-patch+json"`
	ServiceBlockUpdateModel3 *shared.ServiceBlockUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ServicesBlockIDRequest struct {
	PathParams PutSetupV1ServicesBlockIDPathParams
	Request    *PutSetupV1ServicesBlockIDRequests
}

type PutSetupV1ServicesBlockIDResponse struct {
	ContentType           string
	ServiceBlockViewModel *shared.ServiceBlockViewModel
	StatusCode            int64
}
