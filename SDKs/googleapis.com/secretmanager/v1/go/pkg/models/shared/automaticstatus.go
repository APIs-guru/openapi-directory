package shared

// AutomaticStatus
// The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
type AutomaticStatus struct {
	CustomerManagedEncryption *CustomerManagedEncryptionStatus `json:"customerManagedEncryption,omitempty"`
}
