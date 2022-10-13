package shared

import (
	"time"
)

type WritableCircuit struct {
	Cid          string                 `json:"cid"`
	Comments     *string                `json:"comments"`
	CommitRate   *int64                 `json:"commit_rate"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	ID           *int64                 `json:"id"`
	InstallDate  *time.Time             `json:"install_date"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Provider     int64                  `json:"provider"`
	Status       *int64                 `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *int64                 `json:"tenant"`
	Type         int64                  `json:"type"`
}
