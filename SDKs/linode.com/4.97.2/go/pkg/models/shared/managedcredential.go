package shared

import (
	"time"
)

type ManagedCredential struct {
	ID            *int64     `json:"id,omitempty"`
	Label         *string    `json:"label,omitempty"`
	LastDecrypted *time.Time `json:"last_decrypted,omitempty"`
}
