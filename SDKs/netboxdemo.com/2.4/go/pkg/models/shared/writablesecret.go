package shared

import (
	"time"
)

type WritableSecret struct {
	Created      *time.Time             `json:"created,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Device       int64                  `json:"device"`
	Hash         *string                `json:"hash,omitempty"`
	ID           *int64                 `json:"id,omitempty"`
	LastUpdated  *time.Time             `json:"last_updated,omitempty"`
	Name         *string                `json:"name,omitempty"`
	Plaintext    string                 `json:"plaintext"`
	Role         int64                  `json:"role"`
	Tags         []string               `json:"tags,omitempty"`
}
