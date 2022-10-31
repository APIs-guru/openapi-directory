package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1CalendarsIDBlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1CalendarsIDBlockRequests struct {
	CalendarBlockInputModel  *shared.CalendarBlockInputModel `request:"mediaType=application/*+json"`
	CalendarBlockInputModel1 *shared.CalendarBlockInputModel `request:"mediaType=application/json"`
	CalendarBlockInputModel2 *shared.CalendarBlockInputModel `request:"mediaType=application/json-patch+json"`
	CalendarBlockInputModel3 *shared.CalendarBlockInputModel `request:"mediaType=text/json"`
}

type PostSetupV1CalendarsIDBlockRequest struct {
	PathParams PostSetupV1CalendarsIDBlockPathParams
	Request    *PostSetupV1CalendarsIDBlockRequests
}

type PostSetupV1CalendarsIDBlockResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
