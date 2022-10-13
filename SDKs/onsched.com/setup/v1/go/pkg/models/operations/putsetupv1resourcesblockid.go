package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcesBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcesBlockIDRequests struct {
	ResourceBlockUpdateModel  *shared.ResourceBlockUpdateModel `request:"mediaType=application/*+json"`
	ResourceBlockUpdateModel1 *shared.ResourceBlockUpdateModel `request:"mediaType=application/json"`
	ResourceBlockUpdateModel2 *shared.ResourceBlockUpdateModel `request:"mediaType=application/json-patch+json"`
	ResourceBlockUpdateModel3 *shared.ResourceBlockUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ResourcesBlockIDRequest struct {
	PathParams PutSetupV1ResourcesBlockIDPathParams
	Request    *PutSetupV1ResourcesBlockIDRequests
}

type PutSetupV1ResourcesBlockIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
