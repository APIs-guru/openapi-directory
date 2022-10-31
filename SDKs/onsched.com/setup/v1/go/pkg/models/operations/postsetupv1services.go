package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ServicesRequests struct {
	ServiceInputModel  *shared.ServiceInputModel `request:"mediaType=application/*+json"`
	ServiceInputModel1 *shared.ServiceInputModel `request:"mediaType=application/json"`
	ServiceInputModel2 *shared.ServiceInputModel `request:"mediaType=application/json-patch+json"`
	ServiceInputModel3 *shared.ServiceInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ServicesRequest struct {
	Request *PostSetupV1ServicesRequests
}

type PostSetupV1ServicesResponse struct {
	ContentType      string
	ServiceViewModel *shared.ServiceViewModel
	StatusCode       int64
}
