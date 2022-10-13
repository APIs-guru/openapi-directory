package shared

import (
	"time"
)

type CircuitStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Circuit struct {
	Cid          string                 `json:"cid"`
	Comments     *string                `json:"comments"`
	CommitRate   *int64                 `json:"commit_rate"`
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Description  *string                `json:"description"`
	ID           *int64                 `json:"id"`
	InstallDate  *time.Time             `json:"install_date"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Provider     NestedProvider         `json:"provider"`
	Status       *CircuitStatusStatus   `json:"status"`
	Tags         []string               `json:"tags"`
	Tenant       *NestedTenant          `json:"tenant"`
	Type         NestedCircuitType      `json:"type"`
}
