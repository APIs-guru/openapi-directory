package shared

type SSHKeyRequest struct {
	Label  *string `json:"label,omitempty"`
	SSHKey *string `json:"ssh_key,omitempty"`
}
