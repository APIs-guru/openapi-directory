package shared

import (
	"time"
)

type IPAddressRoleRole struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type IPAddressStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type IPAddress struct {
	Address      string                 `json:"address"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Family       *int64                 `json:"family"`
	ID           *int64                 `json:"id"`
	Interface    *IPAddressInterface    `json:"interface"`
	LastUpdated  *time.Time             `json:"last_updated"`
	NatInside    *NestedIPAddress       `json:"nat_inside"`
	NatOutside   *NestedIPAddress       `json:"nat_outside"`
	Role         *IPAddressRoleRole     `json:"role"`
	Status       *IPAddressStatusStatus `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vrf          *NestedVrf             `json:"vrf"`
}
