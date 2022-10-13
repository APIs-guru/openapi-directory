package shared

import (
	"time"
)

type ManagedCredential struct {
	ID            *int64     `json:"id"`
	Label         *string    `json:"label"`
	LastDecrypted *time.Time `json:"last_decrypted"`
}
