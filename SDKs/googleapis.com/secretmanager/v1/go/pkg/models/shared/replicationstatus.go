package shared

// ReplicationStatus
// The replication status of a SecretVersion.
type ReplicationStatus struct {
	Automatic   *AutomaticStatus   `json:"automatic,omitempty"`
	UserManaged *UserManagedStatus `json:"userManaged,omitempty"`
}
