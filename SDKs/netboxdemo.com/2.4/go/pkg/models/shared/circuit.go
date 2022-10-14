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
	Comments     *string                `json:"comments,omitempty"`
	CommitRate   *int64                 `json:"commit_rate,omitempty"`
	Created      *time.Time             `json:"created,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	ID           *int64                 `json:"id,omitempty"`
	InstallDate  *time.Time             `json:"install_date,omitempty"`
	LastUpdated  *time.Time             `json:"last_updated,omitempty"`
	Provider     NestedProvider         `json:"provider"`
	Status       *CircuitStatusStatus   `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *NestedTenant          `json:"tenant,omitempty"`
	Type         NestedCircuitType      `json:"type"`
}
