package shared

type Signature struct {
	PublicKeyID *string `json:"publicKeyId,omitempty"`
	Signature   *string `json:"signature,omitempty"`
}
