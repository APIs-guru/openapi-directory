package shared

import (
	"time"
)

type WritableVlanStatusStatusEnum string

const (
	WritableVlanStatusStatusEnumActive     WritableVlanStatusStatusEnum = "active"
	WritableVlanStatusStatusEnumReserved   WritableVlanStatusStatusEnum = "reserved"
	WritableVlanStatusStatusEnumDeprecated WritableVlanStatusStatusEnum = "deprecated"
)

type WritableVlan struct {
	Created      *time.Time                    `json:"created,omitempty"`
	CustomFields map[string]interface{}        `json:"custom_fields,omitempty"`
	Description  *string                       `json:"description,omitempty"`
	DisplayName  *string                       `json:"display_name,omitempty"`
	Group        *int64                        `json:"group,omitempty"`
	ID           *int64                        `json:"id,omitempty"`
	LastUpdated  *time.Time                    `json:"last_updated,omitempty"`
	Name         string                        `json:"name"`
	PrefixCount  *int64                        `json:"prefix_count,omitempty"`
	Role         *int64                        `json:"role,omitempty"`
	Site         *int64                        `json:"site,omitempty"`
	Status       *WritableVlanStatusStatusEnum `json:"status,omitempty"`
	Tags         []string                      `json:"tags,omitempty"`
	Tenant       *int64                        `json:"tenant,omitempty"`
	Vid          int64                         `json:"vid"`
}
