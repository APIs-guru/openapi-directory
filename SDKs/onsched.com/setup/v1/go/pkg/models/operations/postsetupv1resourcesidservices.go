package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcesIDServicesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1ResourcesIDServicesRequests struct {
	Strings  []string `request:"mediaType=application/*+json"`
	Strings1 []string `request:"mediaType=application/json"`
	Strings2 []string `request:"mediaType=application/json-patch+json"`
	Strings3 []string `request:"mediaType=text/json"`
}

type PostSetupV1ResourcesIDServicesRequest struct {
	PathParams PostSetupV1ResourcesIDServicesPathParams
	Request    *PostSetupV1ResourcesIDServicesRequests
}

type PostSetupV1ResourcesIDServicesResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
