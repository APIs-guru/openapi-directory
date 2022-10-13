package shared

import (
	"time"
)

type WritableIPAddress struct {
	Address      string                 `json:"address"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Family       *int64                 `json:"family"`
	ID           *int64                 `json:"id"`
	Interface    *int64                 `json:"interface"`
	LastUpdated  *time.Time             `json:"last_updated"`
	NatInside    *int64                 `json:"nat_inside"`
	NatOutside   int64                  `json:"nat_outside"`
	Role         *int64                 `json:"role"`
	Status       *int64                 `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *int64                 `json:"tenant"`
	Vrf          *int64                 `json:"vrf"`
}
