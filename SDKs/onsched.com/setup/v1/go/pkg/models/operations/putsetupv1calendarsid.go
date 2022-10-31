package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1CalendarsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1CalendarsIDRequests struct {
	ScheduleUpdateModel  *shared.ScheduleUpdateModel `request:"mediaType=application/*+json"`
	ScheduleUpdateModel1 *shared.ScheduleUpdateModel `request:"mediaType=application/json"`
	ScheduleUpdateModel2 *shared.ScheduleUpdateModel `request:"mediaType=application/json-patch+json"`
	ScheduleUpdateModel3 *shared.ScheduleUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1CalendarsIDRequest struct {
	PathParams PutSetupV1CalendarsIDPathParams
	Request    *PutSetupV1CalendarsIDRequests
}

type PutSetupV1CalendarsIDResponse struct {
	ContentType       string
	ScheduleViewModel *shared.ScheduleViewModel
	StatusCode        int64
}
