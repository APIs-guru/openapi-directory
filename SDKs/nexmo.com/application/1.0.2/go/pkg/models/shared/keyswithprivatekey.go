package shared

type KeysWithPrivateKey struct {
	PrivateKey *string `json:"private_key"`
	PublicKey  *string `json:"public_key"`
}
