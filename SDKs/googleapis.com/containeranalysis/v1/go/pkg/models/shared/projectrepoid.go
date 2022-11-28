package shared

// ProjectRepoID
// Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
type ProjectRepoID struct {
	ProjectID *string `json:"projectId,omitempty"`
	RepoName  *string `json:"repoName,omitempty"`
}
