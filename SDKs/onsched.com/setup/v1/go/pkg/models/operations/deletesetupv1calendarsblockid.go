package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1CalendarsBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1CalendarsBlockIDRequest struct {
	PathParams DeleteSetupV1CalendarsBlockIDPathParams
}

type DeleteSetupV1CalendarsBlockIDResponse struct {
	CalendarBlockViewModel *shared.CalendarBlockViewModel
	ContentType            string
	StatusCode             int64
}
