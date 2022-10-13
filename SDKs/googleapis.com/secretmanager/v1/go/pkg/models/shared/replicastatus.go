package shared

type ReplicaStatus struct {
	CustomerManagedEncryption *CustomerManagedEncryptionStatus `json:"customerManagedEncryption"`
	Location                  *string                          `json:"location"`
}
