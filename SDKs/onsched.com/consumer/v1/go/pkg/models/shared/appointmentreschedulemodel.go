package shared

import (
	"time"
)

type AppointmentRescheduleModel struct {
	EndDateTime         *time.Time `json:"endDateTime"`
	ResourceID          *string    `json:"resourceId"`
	ServiceID           *string    `json:"serviceId"`
	StartDateTime       *time.Time `json:"startDateTime"`
	TravelAppointmentID *string    `json:"travelAppointmentId"`
	TravelTimeMins      *int32     `json:"travelTimeMins"`
}
