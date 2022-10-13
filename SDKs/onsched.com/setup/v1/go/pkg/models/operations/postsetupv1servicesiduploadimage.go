package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ServicesIDUploadimagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ServicesIDUploadimageRequests struct {
	ServiceImageInputModel  *shared.ServiceImageInputModel `request:"mediaType=application/*+json"`
	ServiceImageInputModel1 *shared.ServiceImageInputModel `request:"mediaType=application/json"`
	ServiceImageInputModel2 *shared.ServiceImageInputModel `request:"mediaType=application/json-patch+json"`
	ServiceImageInputModel3 *shared.ServiceImageInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ServicesIDUploadimageRequest struct {
	PathParams PostSetupV1ServicesIDUploadimagePathParams
	Request    *PostSetupV1ServicesIDUploadimageRequests
}

type PostSetupV1ServicesIDUploadimageResponse struct {
	ContentType      string
	ServiceViewModel *shared.ServiceViewModel
	StatusCode       int64
}
