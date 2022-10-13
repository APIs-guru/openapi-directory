package shared

import (
	"time"
)

type PrefixStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Prefix struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Family       *int64                 `json:"family"`
	ID           *int64                 `json:"id"`
	IsPool       *bool                  `json:"is_pool"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Role         *NestedRole            `json:"role"`
	Site         *NestedSite            `json:"site"`
	Status       *PrefixStatusStatus    `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Vlan         *NestedVlan            `json:"vlan"`
	Vrf          *NestedVrf             `json:"vrf"`
}
