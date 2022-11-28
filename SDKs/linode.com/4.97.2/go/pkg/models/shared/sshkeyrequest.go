package shared

// SSHKeyRequest
// An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.
type SSHKeyRequest struct {
	Label  *string `json:"label,omitempty"`
	SSHKey *string `json:"ssh_key,omitempty"`
}
