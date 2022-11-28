package shared

// SyncWorkspaceResponse
// A response after synchronizing the workspace to the latest container version.
type SyncWorkspaceResponse struct {
	MergeConflict []MergeConflict `json:"mergeConflict,omitempty"`
	SyncStatus    *SyncStatus     `json:"syncStatus,omitempty"`
}
