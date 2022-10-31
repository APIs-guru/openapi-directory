package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1LocationsIDServicesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1LocationsIDServicesRequests struct {
	Strings  []string `request:"mediaType=application/*+json"`
	Strings1 []string `request:"mediaType=application/json"`
	Strings2 []string `request:"mediaType=application/json-patch+json"`
	Strings3 []string `request:"mediaType=text/json"`
}

type PostSetupV1LocationsIDServicesRequest struct {
	PathParams PostSetupV1LocationsIDServicesPathParams
	Request    *PostSetupV1LocationsIDServicesRequests
}

type PostSetupV1LocationsIDServicesResponse struct {
	ContentType       string
	LocationViewModel *shared.LocationViewModel
	StatusCode        int64
}
