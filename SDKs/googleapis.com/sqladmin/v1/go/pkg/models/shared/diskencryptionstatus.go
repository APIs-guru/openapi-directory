package shared

// DiskEncryptionStatus
// Disk encryption status for an instance.
type DiskEncryptionStatus struct {
	Kind              *string `json:"kind,omitempty"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
}
