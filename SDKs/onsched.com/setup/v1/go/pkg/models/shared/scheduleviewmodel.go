package shared

import (
	"time"
)

type ScheduleViewModel struct {
	BookingsPerSlot *int32     `json:"bookingsPerSlot,omitempty"`
	DeletedStatus   *bool      `json:"deletedStatus,omitempty"`
	DeletedTime     *time.Time `json:"deletedTime,omitempty"`
	ID              *string    `json:"id,omitempty"`
	Interval        *int32     `json:"interval,omitempty"`
	LocationID      *string    `json:"locationId,omitempty"`
	Name            *string    `json:"name,omitempty"`
	ObjectName      *string    `json:"objectName,omitempty"`
	Primary         *bool      `json:"primary,omitempty"`
	ResourceGroupID *string    `json:"resourceGroupId,omitempty"`
	Type            *string    `json:"type,omitempty"`
}
