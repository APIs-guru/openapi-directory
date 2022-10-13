package shared

type SyncWorkspaceResponse struct {
	MergeConflict []MergeConflict `json:"mergeConflict"`
	SyncStatus    *SyncStatus     `json:"syncStatus"`
}
