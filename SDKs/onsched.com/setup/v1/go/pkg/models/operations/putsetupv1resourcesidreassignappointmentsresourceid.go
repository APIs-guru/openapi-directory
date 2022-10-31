package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams struct {
	ID         string `pathParam:"style=simple,explode=false,name=id"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resourceId"`
}

type PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams struct {
	CalendarID *string    `queryParam:"style=form,explode=true,name=calendarId"`
	EndDate    *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	StartDate  *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest struct {
	PathParams  PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams
	QueryParams PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams
}

type PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse struct {
	AppointmentViewModels []shared.AppointmentViewModel
	ContentType           string
	StatusCode            int64
}
