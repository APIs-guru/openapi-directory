package shared

import (
	"time"
)

type SSHKey struct {
	Created *time.Time `json:"created,omitempty"`
	ID      *int64     `json:"id,omitempty"`
	Label   *string    `json:"label,omitempty"`
	SSHKey  *string    `json:"ssh_key,omitempty"`
}
