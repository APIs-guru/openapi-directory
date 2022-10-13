package shared

import (
	"time"
)

type ScheduleViewModel struct {
	BookingsPerSlot *int32     `json:"bookingsPerSlot"`
	DeletedStatus   *bool      `json:"deletedStatus"`
	DeletedTime     *time.Time `json:"deletedTime"`
	ID              *string    `json:"id"`
	Interval        *int32     `json:"interval"`
	LocationID      *string    `json:"locationId"`
	Name            *string    `json:"name"`
	ObjectName      *string    `json:"objectName"`
	Primary         *bool      `json:"primary"`
	ResourceGroupID *string    `json:"resourceGroupId"`
	Type            *string    `json:"type"`
}
