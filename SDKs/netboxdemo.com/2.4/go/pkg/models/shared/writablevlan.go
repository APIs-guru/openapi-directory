package shared

import (
	"time"
)

type WritableVlan struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	DisplayName  *string                `json:"display_name"`
	Group        *int64                 `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Role         *int64                 `json:"role"`
	Site         *int64                 `json:"site"`
	Status       *int64                 `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *int64                 `json:"tenant"`
	Vid          int64                  `json:"vid"`
}
