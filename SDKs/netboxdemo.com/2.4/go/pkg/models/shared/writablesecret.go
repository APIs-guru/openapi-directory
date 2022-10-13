package shared

import (
	"time"
)

type WritableSecret struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	Device       int64                  `json:"device"`
	Hash         *string                `json:"hash"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Name         *string                `json:"name"`
	Plaintext    string                 `json:"plaintext"`
	Role         int64                  `json:"role"`
	Tags         []string               `json:"tags"`
}
