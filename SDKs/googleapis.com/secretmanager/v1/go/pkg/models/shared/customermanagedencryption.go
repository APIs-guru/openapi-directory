package shared

// CustomerManagedEncryption
// Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
type CustomerManagedEncryption struct {
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
