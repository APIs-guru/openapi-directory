package shared



type SyncWorkspaceResponse struct {
    MergeConflict []MergeConflict `json:"mergeConflict,omitempty"`
    SyncStatus *SyncStatus `json:"syncStatus,omitempty"`
    
}

