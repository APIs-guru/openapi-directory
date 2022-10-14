package shared

type SyncStatus struct {
	MergeConflict *bool `json:"mergeConflict,omitempty"`
	SyncError     *bool `json:"syncError,omitempty"`
}
