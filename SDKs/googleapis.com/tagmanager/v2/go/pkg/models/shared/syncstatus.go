package shared

type SyncStatus struct {
	MergeConflict *bool `json:"mergeConflict"`
	SyncError     *bool `json:"syncError"`
}
