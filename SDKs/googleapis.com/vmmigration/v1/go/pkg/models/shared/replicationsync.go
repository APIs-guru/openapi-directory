package shared

// ReplicationSync
// ReplicationSync contain information about the last replica sync to the cloud.
type ReplicationSync struct {
	LastSyncTime *string `json:"lastSyncTime,omitempty"`
}
