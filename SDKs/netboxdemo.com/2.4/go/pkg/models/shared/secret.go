package shared

import (
	"time"
)

type Secret struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Device       NestedDevice           `json:"device"`
	Hash         *string                `json:"hash"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         *string                `json:"name"`
	Plaintext    string                 `json:"plaintext"`
	Role         NestedSecretRole       `json:"role"`
	Tags         []string               `json:"tags"`
}
