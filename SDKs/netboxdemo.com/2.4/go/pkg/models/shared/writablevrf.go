package shared

import (
	"time"
)

type WritableVrf struct {
	Created       *time.Time             `json:"created"`
	CustomFields  map[string]interface{} `json:"custom_fields"`
	Description   *string                `json:"description"`
	DisplayName   *string                `json:"display_name"`
	EnforceUnique *bool                  `json:"enforce_unique"`
	ID            *int64                 `json:"id"`
	LastUpdated   *time.Time             `json:"last_updated"`
	Name          string                 `json:"name"`
	Rd            string                 `json:"rd"`
	Tags          []string               `json:"tags"`
	Tenant        *int64                 `json:"tenant"`
}
