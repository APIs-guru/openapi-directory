package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesIDAvailabilityPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesIDAvailabilityRequest struct {
	PathParams GetSetupV1ServicesIDAvailabilityPathParams
}

type GetSetupV1ServicesIDAvailabilityResponse struct {
	ContentType                  string
	ServiceAvailabilityViewModel *shared.ServiceAvailabilityViewModel
	StatusCode                   int64
}
