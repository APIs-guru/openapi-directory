package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1CalendarsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1CalendarsIDRequest struct {
	PathParams DeleteSetupV1CalendarsIDPathParams
}

type DeleteSetupV1CalendarsIDResponse struct {
	ContentType       string
	ScheduleViewModel *shared.ScheduleViewModel
	StatusCode        int64
}
