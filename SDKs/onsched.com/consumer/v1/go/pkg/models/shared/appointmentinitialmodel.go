package shared

import (
	"time"
)

type AppointmentInitialModel struct {
	BookedBy            *string    `json:"bookedBy"`
	BookingWindowID     *string    `json:"bookingWindowId"`
	CalendarID          *string    `json:"calendarId"`
	CustomerID          *string    `json:"customerId"`
	CustomerMessage     *string    `json:"customerMessage"`
	Email               *string    `json:"email"`
	EndDateTime         *time.Time `json:"endDateTime"`
	GroupSize           *int32     `json:"groupSize"`
	Location            *string    `json:"location"`
	LocationID          *string    `json:"locationId"`
	Name                *string    `json:"name"`
	Notes               *string    `json:"notes"`
	Phone               *string    `json:"phone"`
	PhoneType           *string    `json:"phoneType"`
	ResourceGroupID     *string    `json:"resourceGroupId"`
	ResourceID          *string    `json:"resourceId"`
	ResourceIds         *string    `json:"resourceIds"`
	ServiceAllocationID *string    `json:"serviceAllocationId"`
	ServiceID           *string    `json:"serviceId"`
	StartDateTime       *time.Time `json:"startDateTime"`
	TimezoneName        *string    `json:"timezoneName"`
	TravelAppointmentID *string    `json:"travelAppointmentId"`
	TravelTimeMins      *int32     `json:"travelTimeMins"`
}
