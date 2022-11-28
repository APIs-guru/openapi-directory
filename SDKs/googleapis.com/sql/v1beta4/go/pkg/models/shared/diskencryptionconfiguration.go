package shared

// DiskEncryptionConfiguration
// Disk encryption configuration for an instance.
type DiskEncryptionConfiguration struct {
	Kind       *string `json:"kind,omitempty"`
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
