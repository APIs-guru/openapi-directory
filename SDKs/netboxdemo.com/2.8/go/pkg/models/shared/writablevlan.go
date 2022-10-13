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
	Created      *time.Time                    `json:"created"`
	CustomFields map[string]interface{}        `json:"custom_fields"`
	Description  *string                       `json:"description"`
	DisplayName  *string                       `json:"display_name"`
	Group        *int64                        `json:"group"`
	ID           *int64                        `json:"id"`
	LastUpdated  *time.Time                    `json:"last_updated"`
	Name         string                        `json:"name"`
	PrefixCount  *int64                        `json:"prefix_count"`
	Role         *int64                        `json:"role"`
	Site         *int64                        `json:"site"`
	Status       *WritableVlanStatusStatusEnum `json:"status"`
	Tags         []string                      `json:"tags"`
	Tenant       *int64                        `json:"tenant"`
	Vid          int64                         `json:"vid"`
}
