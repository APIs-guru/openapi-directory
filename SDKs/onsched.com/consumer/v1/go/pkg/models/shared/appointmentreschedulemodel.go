package shared

import (
	"time"
)

type AppointmentRescheduleModel struct {
	EndDateTime         *time.Time `json:"endDateTime,omitempty"`
	ResourceID          *string    `json:"resourceId,omitempty"`
	ServiceID           *string    `json:"serviceId,omitempty"`
	StartDateTime       *time.Time `json:"startDateTime,omitempty"`
	TravelAppointmentID *string    `json:"travelAppointmentId,omitempty"`
	TravelTimeMins      *int32     `json:"travelTimeMins,omitempty"`
}
