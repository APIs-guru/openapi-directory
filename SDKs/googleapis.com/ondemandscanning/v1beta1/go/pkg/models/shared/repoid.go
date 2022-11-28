package shared

// RepoID
// A unique identifier for a Cloud Repo.
type RepoID struct {
	ProjectRepoID *ProjectRepoID `json:"projectRepoId,omitempty"`
	UID           *string        `json:"uid,omitempty"`
}
