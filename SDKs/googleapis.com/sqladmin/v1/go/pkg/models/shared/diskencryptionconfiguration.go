package shared

type DiskEncryptionConfiguration struct {
	Kind       *string `json:"kind,omitempty"`
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
