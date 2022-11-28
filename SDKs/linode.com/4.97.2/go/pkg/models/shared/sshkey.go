package shared

import (
	"time"
)

// SSHKey
// A credential object for authenticating a User's secure shell connection to a Linode.
type SSHKey struct {
	Created *time.Time `json:"created,omitempty"`
	ID      *int64     `json:"id,omitempty"`
	Label   *string    `json:"label,omitempty"`
	SSHKey  *string    `json:"ssh_key,omitempty"`
}

// SSHKeyInput
// A credential object for authenticating a User's secure shell connection to a Linode.
type SSHKeyInput struct {
	Label *string `json:"label,omitempty"`
}
