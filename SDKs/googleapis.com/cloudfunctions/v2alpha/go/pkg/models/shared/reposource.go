package shared

type RepoSource struct {
	BranchName  *string `json:"branchName,omitempty"`
	CommitSha   *string `json:"commitSha,omitempty"`
	Dir         *string `json:"dir,omitempty"`
	InvertRegex *bool   `json:"invertRegex,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
	RepoName    *string `json:"repoName,omitempty"`
	TagName     *string `json:"tagName,omitempty"`
}
