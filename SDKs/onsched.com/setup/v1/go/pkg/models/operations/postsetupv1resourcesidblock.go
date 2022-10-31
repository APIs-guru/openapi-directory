package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcesIDBlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ResourcesIDBlockRequests struct {
	ResourceBlockInputModel  *shared.ResourceBlockInputModel `request:"mediaType=application/*+json"`
	ResourceBlockInputModel1 *shared.ResourceBlockInputModel `request:"mediaType=application/json"`
	ResourceBlockInputModel2 *shared.ResourceBlockInputModel `request:"mediaType=application/json-patch+json"`
	ResourceBlockInputModel3 *shared.ResourceBlockInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ResourcesIDBlockRequest struct {
	PathParams PostSetupV1ResourcesIDBlockPathParams
	Request    *PostSetupV1ResourcesIDBlockRequests
}

type PostSetupV1ResourcesIDBlockResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
