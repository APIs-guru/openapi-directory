package shared

type GenerateEphemeralCertRequest struct {
	AccessToken   *string `json:"access_token"`
	PublicKey     *string `json:"public_key"`
	ReadTime      *string `json:"readTime"`
	ValidDuration *string `json:"validDuration"`
}
