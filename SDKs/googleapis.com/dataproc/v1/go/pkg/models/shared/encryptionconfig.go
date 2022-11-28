package shared

// EncryptionConfig
// Encryption settings for the cluster.
type EncryptionConfig struct {
	GcePdKmsKeyName *string `json:"gcePdKmsKeyName,omitempty"`
}
