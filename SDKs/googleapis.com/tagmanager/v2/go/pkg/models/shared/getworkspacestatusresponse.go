package shared

type GetWorkspaceStatusResponse struct {
	MergeConflict   []MergeConflict `json:"mergeConflict,omitempty"`
	WorkspaceChange []Entity        `json:"workspaceChange,omitempty"`
}
