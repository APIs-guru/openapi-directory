package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1CompaniesRegionsRequests struct {
	RegionInputModel  *shared.RegionInputModel `request:"mediaType=application/*+json"`
	RegionInputModel1 *shared.RegionInputModel `request:"mediaType=application/json"`
	RegionInputModel2 *shared.RegionInputModel `request:"mediaType=application/json-patch+json"`
	RegionInputModel3 *shared.RegionInputModel `request:"mediaType=text/json"`
}

type PostSetupV1CompaniesRegionsRequest struct {
	Request *PostSetupV1CompaniesRegionsRequests
}

type PostSetupV1CompaniesRegionsResponse struct {
	ContentType     string
	RegionViewModel *shared.RegionViewModel
	StatusCode      int64
}
