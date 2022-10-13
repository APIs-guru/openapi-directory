package shared

import (
	"time"
)

type VlanStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
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
	Role         *NestedRole            `json:"role"`
	Site         *NestedSite            `json:"site"`
	Status       *VlanStatusStatus      `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vid          int64                  `json:"vid"`
}
