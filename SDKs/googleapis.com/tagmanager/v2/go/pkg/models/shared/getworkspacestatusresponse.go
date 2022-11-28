package shared

// GetWorkspaceStatusResponse
// The changes that have occurred in the workspace since the base container version.
type GetWorkspaceStatusResponse struct {
	MergeConflict   []MergeConflict `json:"mergeConflict,omitempty"`
	WorkspaceChange []Entity        `json:"workspaceChange,omitempty"`
}
