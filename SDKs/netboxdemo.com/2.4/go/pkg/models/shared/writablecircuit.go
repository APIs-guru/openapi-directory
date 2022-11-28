package shared

import (
	"time"
)

type WritableCircuitInput struct {
	Cid          string                 `json:"cid"`
	Comments     *string                `json:"comments,omitempty"`
	CommitRate   *int64                 `json:"commit_rate,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	InstallDate  *time.Time             `json:"install_date,omitempty"`
	Provider     int64                  `json:"provider"`
	Status       *int64                 `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *int64                 `json:"tenant,omitempty"`
	Type         int64                  `json:"type"`
}
