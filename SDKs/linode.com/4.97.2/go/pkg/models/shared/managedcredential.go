package shared

import (
	"time"
)

// ManagedCredentialInput
// A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
type ManagedCredentialInput struct {
	Label *string `json:"label,omitempty"`
}

// ManagedCredential
// A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
type ManagedCredential struct {
	ID            *int64     `json:"id,omitempty"`
	Label         *string    `json:"label,omitempty"`
	LastDecrypted *time.Time `json:"last_decrypted,omitempty"`
}
