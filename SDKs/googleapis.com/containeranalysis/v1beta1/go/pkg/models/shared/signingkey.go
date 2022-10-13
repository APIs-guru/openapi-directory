package shared

type SigningKey struct {
	KeyID          *string `json:"keyId"`
	KeyScheme      *string `json:"keyScheme"`
	KeyType        *string `json:"keyType"`
	PublicKeyValue *string `json:"publicKeyValue"`
}
