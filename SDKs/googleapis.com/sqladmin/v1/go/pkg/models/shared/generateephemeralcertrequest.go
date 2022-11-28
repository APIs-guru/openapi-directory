package shared

// GenerateEphemeralCertRequest
// Ephemeral certificate creation request.
type GenerateEphemeralCertRequest struct {
	AccessToken   *string `json:"access_token,omitempty"`
	PublicKey     *string `json:"public_key,omitempty"`
	ReadTime      *string `json:"readTime,omitempty"`
	ValidDuration *string `json:"validDuration,omitempty"`
}
