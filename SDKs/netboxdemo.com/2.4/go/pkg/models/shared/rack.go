package shared

import (
	"time"
)

type RackTypeType struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type RackWidthWidth struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Rack struct {
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	DescUnits    *bool                  `json:"desc_units"`
	DisplayName  *string                `json:"display_name"`
	FacilityID   *string                `json:"facility_id"`
	Group        *NestedRackGroup       `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Role         *NestedRackRole        `json:"role"`
	Serial       *string                `json:"serial"`
	Site         NestedSite             `json:"site"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Type         *RackTypeType          `json:"type"`
	UHeight      *int64                 `json:"u_height"`
	Width        *RackWidthWidth        `json:"width"`
}
