package shared

type Signature struct {
	PublicKeyID *string `json:"publicKeyId"`
	Signature   *string `json:"signature"`
}
