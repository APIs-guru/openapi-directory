package shared

// CustomerManagedEncryptionStatus
// Describes the status of customer-managed encryption.
type CustomerManagedEncryptionStatus struct {
	KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
}
