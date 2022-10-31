package shared

type EncryptionConfig struct {
	KmsKey *string `json:"kmsKey,omitempty"`
}
