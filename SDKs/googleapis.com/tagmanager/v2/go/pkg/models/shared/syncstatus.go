package shared

// SyncStatus
// The status of a workspace after synchronization.
type SyncStatus struct {
	MergeConflict *bool `json:"mergeConflict,omitempty"`
	SyncError     *bool `json:"syncError,omitempty"`
}
