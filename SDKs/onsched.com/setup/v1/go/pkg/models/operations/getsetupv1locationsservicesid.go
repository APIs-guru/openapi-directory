package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1LocationsServicesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1LocationsServicesIDRequest struct {
	PathParams GetSetupV1LocationsServicesIDPathParams
}

type GetSetupV1LocationsServicesIDResponse struct {
	BusinessServiceViewModel *shared.BusinessServiceViewModel
	ContentType              string
	StatusCode               int64
}
