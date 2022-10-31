package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcesIDUploadimagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ResourcesIDUploadimageRequests struct {
	ResourceImageInputModel  *shared.ResourceImageInputModel `request:"mediaType=application/*+json"`
	ResourceImageInputModel1 *shared.ResourceImageInputModel `request:"mediaType=application/json"`
	ResourceImageInputModel2 *shared.ResourceImageInputModel `request:"mediaType=application/json-patch+json"`
	ResourceImageInputModel3 *shared.ResourceImageInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ResourcesIDUploadimageRequest struct {
	PathParams PostSetupV1ResourcesIDUploadimagePathParams
	Request    *PostSetupV1ResourcesIDUploadimageRequests
}

type PostSetupV1ResourcesIDUploadimageResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
