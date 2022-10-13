package shared

import (
	"time"
)

type VlanStatusLabelEnum string

const (
	VlanStatusLabelEnumActive     VlanStatusLabelEnum = "Active"
	VlanStatusLabelEnumReserved   VlanStatusLabelEnum = "Reserved"
	VlanStatusLabelEnumDeprecated VlanStatusLabelEnum = "Deprecated"
)

type VlanStatusValueEnum string

const (
	VlanStatusValueEnumActive     VlanStatusValueEnum = "active"
	VlanStatusValueEnumReserved   VlanStatusValueEnum = "reserved"
	VlanStatusValueEnumDeprecated VlanStatusValueEnum = "deprecated"
)

type VlanStatusStatus struct {
	Label VlanStatusLabelEnum `json:"label"`
	Value VlanStatusValueEnum `json:"value"`
}

type Vlan struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	DisplayName  *string                `json:"display_name"`
	Group        *NestedVlanGroup       `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	PrefixCount  *int64                 `json:"prefix_count"`
	Role         *NestedRole            `json:"role"`
	Site         *NestedSite            `json:"site"`
	Status       *VlanStatusStatus      `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vid          int64                  `json:"vid"`
}
