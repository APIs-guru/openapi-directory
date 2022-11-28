package shared

// EncryptionConfig
// Encryption configuration for a Cloud Spanner database.
type EncryptionConfig struct {
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
