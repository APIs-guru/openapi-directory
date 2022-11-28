package shared

// UserManagedStatus
// The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
type UserManagedStatus struct {
	Replicas []ReplicaStatus `json:"replicas,omitempty"`
}
