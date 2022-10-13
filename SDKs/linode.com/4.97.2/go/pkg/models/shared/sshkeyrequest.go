package shared

type SSHKeyRequest struct {
	Label  *string `json:"label"`
	SSHKey *string `json:"ssh_key"`
}
