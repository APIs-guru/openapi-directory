package shared

// ReplicaStatus
// Describes the status of a user-managed replica for the SecretVersion.
type ReplicaStatus struct {
	CustomerManagedEncryption *CustomerManagedEncryptionStatus `json:"customerManagedEncryption,omitempty"`
	Location                  *string                          `json:"location,omitempty"`
}
