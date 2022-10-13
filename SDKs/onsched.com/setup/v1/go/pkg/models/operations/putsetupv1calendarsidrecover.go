package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1CalendarsIDRecoverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1CalendarsIDRecoverRequest struct {
	PathParams PutSetupV1CalendarsIDRecoverPathParams
}

type PutSetupV1CalendarsIDRecoverResponse struct {
	ContentType       string
	ScheduleViewModel *shared.ScheduleViewModel
	StatusCode        int64
}
