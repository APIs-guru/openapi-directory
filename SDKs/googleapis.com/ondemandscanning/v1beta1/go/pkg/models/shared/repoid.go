package shared

type RepoID struct {
	ProjectRepoID *ProjectRepoID `json:"projectRepoId,omitempty"`
	UID           *string        `json:"uid,omitempty"`
}
