package shared

// GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoID
// Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
type GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoID struct {
	ProjectID *string `json:"projectId,omitempty"`
	RepoName  *string `json:"repoName,omitempty"`
}
