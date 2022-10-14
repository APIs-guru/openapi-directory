package shared

type CloudWorkspaceID struct {
	Name   *string `json:"name,omitempty"`
	RepoID *RepoID `json:"repoId,omitempty"`
}
