package shared

// RepoSource
// Location of the source in a Google Cloud Source Repository.
type RepoSource struct {
	BranchName    *string           `json:"branchName,omitempty"`
	CommitSha     *string           `json:"commitSha,omitempty"`
	Dir           *string           `json:"dir,omitempty"`
	InvertRegex   *bool             `json:"invertRegex,omitempty"`
	ProjectID     *string           `json:"projectId,omitempty"`
	RepoName      *string           `json:"repoName,omitempty"`
	Substitutions map[string]string `json:"substitutions,omitempty"`
	TagName       *string           `json:"tagName,omitempty"`
}
