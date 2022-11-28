package shared

// ImportSSHPublicKeyResponse
// A response message for importing an SSH public key.
type ImportSSHPublicKeyResponse struct {
	Details      *string       `json:"details,omitempty"`
	LoginProfile *LoginProfile `json:"loginProfile,omitempty"`
}
