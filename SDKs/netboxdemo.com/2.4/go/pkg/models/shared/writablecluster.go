package shared

import (
	"time"
)

type WritableCluster struct {
	Comments     *string                `json:"comments"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Group        *int64                 `json:"group"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         string                 `json:"name"`
	Site         *int64                 `json:"site"`
	Tags         []string               `json:"tags"`
	Type         int64                  `json:"type"`
}
