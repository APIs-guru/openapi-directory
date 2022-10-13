package shared

import (
	"time"
)

type WritableTenant struct {
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Group        *int64                 `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Slug         string                 `json:"slug"`
	Tags         []string               `json:"tags"`
}
