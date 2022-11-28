package shared

// RepoSource
// RepoSource describes the location of the source in a Google Cloud Source Repository.
type RepoSource struct {
	BranchName *string `json:"branchName,omitempty"`
	CommitSha  *string `json:"commitSha,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	RepoName   *string `json:"repoName,omitempty"`
	TagName    *string `json:"tagName,omitempty"`
}
