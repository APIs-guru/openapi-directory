package shared

import (
	"time"
)

type Tenant struct {
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	Group        *NestedTenantGroup     `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Slug         string                 `json:"slug"`
	Tags         []string               `json:"tags"`
}
