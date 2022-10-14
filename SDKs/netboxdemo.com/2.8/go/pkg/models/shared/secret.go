package shared

import (
	"time"
)

type Secret struct {
	Created      *time.Time             `json:"created,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Device       NestedDevice           `json:"device"`
	Hash         *string                `json:"hash,omitempty"`
	ID           *int64                 `json:"id,omitempty"`
	LastUpdated  *time.Time             `json:"last_updated,omitempty"`
	Name         *string                `json:"name,omitempty"`
	Plaintext    string                 `json:"plaintext"`
	Role         NestedSecretRole       `json:"role"`
	Tags         []string               `json:"tags,omitempty"`
}
