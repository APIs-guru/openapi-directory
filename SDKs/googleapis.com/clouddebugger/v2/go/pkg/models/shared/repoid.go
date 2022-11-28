package shared

// RepoID
// A unique identifier for a cloud repo.
type RepoID struct {
	ProjectRepoID *ProjectRepoID `json:"projectRepoId,omitempty"`
	UID           *string        `json:"uid,omitempty"`
}
