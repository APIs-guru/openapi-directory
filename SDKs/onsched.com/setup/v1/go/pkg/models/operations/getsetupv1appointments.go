package operations

import (
	"time"
)

type GetSetupV1AppointmentsQueryParams struct {
	BookedBy            *string    `queryParam:"style=form,explode=true,name=bookedBy"`
	CalendarID          *string    `queryParam:"style=form,explode=true,name=calendarId"`
	CustomerID          *string    `queryParam:"style=form,explode=true,name=customerId"`
	Email               *string    `queryParam:"style=form,explode=true,name=email"`
	EndDate             *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Lastname            *string    `queryParam:"style=form,explode=true,name=lastname"`
	Limit               *int32     `queryParam:"style=form,explode=true,name=limit"`
	LocationID          *string    `queryParam:"style=form,explode=true,name=locationId"`
	Offset              *int32     `queryParam:"style=form,explode=true,name=offset"`
	ResourceID          *string    `queryParam:"style=form,explode=true,name=resourceId"`
	ServiceAllocationID *string    `queryParam:"style=form,explode=true,name=serviceAllocationId"`
	ServiceID           *string    `queryParam:"style=form,explode=true,name=serviceId"`
	StartDate           *time.Time `queryParam:"style=form,explode=true,name=startDate"`
	Status              *string    `queryParam:"style=form,explode=true,name=status"`
}

type GetSetupV1AppointmentsRequest struct {
	QueryParams GetSetupV1AppointmentsQueryParams
}

type GetSetupV1AppointmentsResponse struct {
	AppointmentListViewModel map[string]interface{}
	ContentType              string
	StatusCode               int64
}
