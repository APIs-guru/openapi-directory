package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1LocationsIDUploadimagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1LocationsIDUploadimageRequests struct {
	ResourceImageInputModel  *shared.ResourceImageInputModel `request:"mediaType=application/*+json"`
	ResourceImageInputModel1 *shared.ResourceImageInputModel `request:"mediaType=application/json"`
	ResourceImageInputModel2 *shared.ResourceImageInputModel `request:"mediaType=application/json-patch+json"`
	ResourceImageInputModel3 *shared.ResourceImageInputModel `request:"mediaType=text/json"`
}

type PostSetupV1LocationsIDUploadimageRequest struct {
	PathParams PostSetupV1LocationsIDUploadimagePathParams
	Request    *PostSetupV1LocationsIDUploadimageRequests
}

type PostSetupV1LocationsIDUploadimageResponse struct {
	ContentType       string
	LocationViewModel *shared.LocationViewModel
	StatusCode        int64
}
