package shared

import (
	"time"
)

type SSHKey struct {
	Created *time.Time `json:"created"`
	ID      *int64     `json:"id"`
	Label   *string    `json:"label"`
	SSHKey  *string    `json:"ssh_key"`
}
