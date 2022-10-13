package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1CalendarsBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1CalendarsBlockIDRequests struct {
	CalendarBlockInputModel  *shared.CalendarBlockInputModel `request:"mediaType=application/*+json"`
	CalendarBlockInputModel1 *shared.CalendarBlockInputModel `request:"mediaType=application/json"`
	CalendarBlockInputModel2 *shared.CalendarBlockInputModel `request:"mediaType=application/json-patch+json"`
	CalendarBlockInputModel3 *shared.CalendarBlockInputModel `request:"mediaType=text/json"`
}

type PutSetupV1CalendarsBlockIDRequest struct {
	PathParams PutSetupV1CalendarsBlockIDPathParams
	Request    *PutSetupV1CalendarsBlockIDRequests
}

type PutSetupV1CalendarsBlockIDResponse struct {
	CalendarBlockViewModel *shared.CalendarBlockViewModel
	ContentType            string
	StatusCode             int64
}
