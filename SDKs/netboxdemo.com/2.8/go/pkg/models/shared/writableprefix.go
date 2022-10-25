package shared

import (
	"time"
)

type WritablePrefixStatusEnum string

const (
	WritablePrefixStatusEnumContainer  WritablePrefixStatusEnum = "container"
	WritablePrefixStatusEnumActive     WritablePrefixStatusEnum = "active"
	WritablePrefixStatusEnumReserved   WritablePrefixStatusEnum = "reserved"
	WritablePrefixStatusEnumDeprecated WritablePrefixStatusEnum = "deprecated"
)

type WritablePrefix struct {
	Created      *time.Time                `json:"created,omitempty"`
	CustomFields map[string]interface{}    `json:"custom_fields,omitempty"`
	Description  *string                   `json:"description,omitempty"`
	Family       *string                   `json:"family,omitempty"`
	ID           *int64                    `json:"id,omitempty"`
	IsPool       *bool                     `json:"is_pool,omitempty"`
	LastUpdated  *time.Time                `json:"last_updated,omitempty"`
	Prefix       string                    `json:"prefix"`
	Role         *int64                    `json:"role,omitempty"`
	Site         *int64                    `json:"site,omitempty"`
	Status       *WritablePrefixStatusEnum `json:"status,omitempty"`
	Tags         []string                  `json:"tags,omitempty"`
	Tenant       *int64                    `json:"tenant,omitempty"`
	Vlan         *int64                    `json:"vlan,omitempty"`
	Vrf          *int64                    `json:"vrf,omitempty"`
}
