package shared

type ImportSSHPublicKeyResponse struct {
	Details      *string       `json:"details"`
	LoginProfile *LoginProfile `json:"loginProfile"`
}
