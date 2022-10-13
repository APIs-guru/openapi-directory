package shared

type GetWorkspaceStatusResponse struct {
	MergeConflict   []MergeConflict `json:"mergeConflict"`
	WorkspaceChange []Entity        `json:"workspaceChange"`
}
