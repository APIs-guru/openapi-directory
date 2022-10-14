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
	Created      *time.Time             `json:"created,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	Family       *int64                 `json:"family,omitempty"`
	ID           *int64                 `json:"id,omitempty"`
	Interface    *IPAddressInterface    `json:"interface,omitempty"`
	LastUpdated  *time.Time             `json:"last_updated,omitempty"`
	NatInside    *NestedIPAddress       `json:"nat_inside,omitempty"`
	NatOutside   *NestedIPAddress       `json:"nat_outside,omitempty"`
	Role         *IPAddressRoleRole     `json:"role,omitempty"`
	Status       *IPAddressStatusStatus `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *NestedTenant          `json:"tenant,omitempty"`
	Vrf          *NestedVrf             `json:"vrf,omitempty"`
}
