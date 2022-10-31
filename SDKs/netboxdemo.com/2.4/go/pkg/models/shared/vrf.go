package shared

import (
	"time"
)

type Vrf struct {
	Created       *time.Time             `json:"created,omitempty"`
	CustomFields  map[string]interface{} `json:"custom_fields,omitempty"`
	Description   *string                `json:"description,omitempty"`
	DisplayName   *string                `json:"display_name,omitempty"`
	EnforceUnique *bool                  `json:"enforce_unique,omitempty"`
	ID            *int64                 `json:"id,omitempty"`
	LastUpdated   *time.Time             `json:"last_updated,omitempty"`
	Name          string                 `json:"name"`
	Rd            string                 `json:"rd"`
	Tags          []string               `json:"tags,omitempty"`
	Tenant        *NestedTenant          `json:"tenant,omitempty"`
}
