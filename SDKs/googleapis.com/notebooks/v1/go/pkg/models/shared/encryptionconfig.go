package shared

// EncryptionConfig
// Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.
type EncryptionConfig struct {
	KmsKey *string `json:"kmsKey,omitempty"`
}
