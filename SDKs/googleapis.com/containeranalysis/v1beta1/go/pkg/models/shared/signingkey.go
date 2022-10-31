package shared

type SigningKey struct {
	KeyID          *string `json:"keyId,omitempty"`
	KeyScheme      *string `json:"keyScheme,omitempty"`
	KeyType        *string `json:"keyType,omitempty"`
	PublicKeyValue *string `json:"publicKeyValue,omitempty"`
}
