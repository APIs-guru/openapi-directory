package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1CompaniesRegionsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1CompaniesRegionsIDRequest struct {
	PathParams GetSetupV1CompaniesRegionsIDPathParams
}

type GetSetupV1CompaniesRegionsIDResponse struct {
	ContentType     string
	RegionViewModel *shared.RegionViewModel
	StatusCode      int64
}
