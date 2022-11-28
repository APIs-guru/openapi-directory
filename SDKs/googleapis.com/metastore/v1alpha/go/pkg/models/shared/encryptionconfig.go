package shared

// EncryptionConfig
// Encryption settings for the service.
type EncryptionConfig struct {
	KmsKey *string `json:"kmsKey,omitempty"`
}
