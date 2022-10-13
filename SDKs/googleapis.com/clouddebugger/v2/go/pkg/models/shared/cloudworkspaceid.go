package shared

type CloudWorkspaceID struct {
	Name   *string `json:"name"`
	RepoID *RepoID `json:"repoId"`
}
