package shared

import (
	"time"
)

type WritablePrefixStatusStatusEnum string

const (
	WritablePrefixStatusStatusEnumContainer  WritablePrefixStatusStatusEnum = "container"
	WritablePrefixStatusStatusEnumActive     WritablePrefixStatusStatusEnum = "active"
	WritablePrefixStatusStatusEnumReserved   WritablePrefixStatusStatusEnum = "reserved"
	WritablePrefixStatusStatusEnumDeprecated WritablePrefixStatusStatusEnum = "deprecated"
)

type WritablePrefix struct {
	Created      *time.Time                      `json:"created,omitempty"`
	CustomFields map[string]interface{}          `json:"custom_fields,omitempty"`
	Description  *string                         `json:"description,omitempty"`
	Family       *string                         `json:"family,omitempty"`
	ID           *int64                          `json:"id,omitempty"`
	IsPool       *bool                           `json:"is_pool,omitempty"`
	LastUpdated  *time.Time                      `json:"last_updated,omitempty"`
	Prefix       string                          `json:"prefix"`
	Role         *int64                          `json:"role,omitempty"`
	Site         *int64                          `json:"site,omitempty"`
	Status       *WritablePrefixStatusStatusEnum `json:"status,omitempty"`
	Tags         []string                        `json:"tags,omitempty"`
	Tenant       *int64                          `json:"tenant,omitempty"`
	Vlan         *int64                          `json:"vlan,omitempty"`
	Vrf          *int64                          `json:"vrf,omitempty"`
}
