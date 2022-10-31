package shared

import (
	"time"
)

type ResourceGroupViewModel struct {
	BookingNotification *int32     `json:"bookingNotification,omitempty"`
	DeletedStatus       *bool      `json:"deletedStatus,omitempty"`
	DeletedTime         *time.Time `json:"deletedTime,omitempty"`
	Description         *string    `json:"description,omitempty"`
	Email               *string    `json:"email,omitempty"`
	ID                  *string    `json:"id,omitempty"`
	LocationID          *string    `json:"locationId,omitempty"`
	Name                *string    `json:"name,omitempty"`
	ObjectName          *string    `json:"objectName,omitempty"`
}
