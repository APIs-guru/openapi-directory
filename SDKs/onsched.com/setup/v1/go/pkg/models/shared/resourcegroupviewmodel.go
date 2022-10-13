package shared

import (
	"time"
)

type ResourceGroupViewModel struct {
	BookingNotification *int32     `json:"bookingNotification"`
	DeletedStatus       *bool      `json:"deletedStatus"`
	DeletedTime         *time.Time `json:"deletedTime"`
	Description         *string    `json:"description"`
	Email               *string    `json:"email"`
	ID                  *string    `json:"id"`
	LocationID          *string    `json:"locationId"`
	Name                *string    `json:"name"`
	ObjectName          *string    `json:"objectName"`
}
