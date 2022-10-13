package shared

import (
	"time"
)

type WritableRack struct {
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	DescUnits    *bool                  `json:"desc_units"`
	DisplayName  *string                `json:"display_name"`
	FacilityID   *string                `json:"facility_id"`
	Group        *int64                 `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Role         *int64                 `json:"role"`
	Serial       *string                `json:"serial"`
	Site         int64                  `json:"site"`
	Tags         []string               `json:"tags"`
	Tenant       *int64                 `json:"tenant"`
	Type         *int64                 `json:"type"`
	UHeight      *int64                 `json:"u_height"`
	Width        *int64                 `json:"width"`
}
