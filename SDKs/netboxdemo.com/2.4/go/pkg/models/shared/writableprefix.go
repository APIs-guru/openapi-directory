package shared

import (
	"time"
)

type WritablePrefix struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Family       *int64                 `json:"family"`
	ID           *int64                 `json:"id"`
	IsPool       *bool                  `json:"is_pool"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Role         *int64                 `json:"role"`
	Site         *int64                 `json:"site"`
	Status       *int64                 `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *int64                 `json:"tenant"`
	Vlan         *int64                 `json:"vlan"`
	Vrf          *int64                 `json:"vrf"`
}
