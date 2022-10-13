package shared

type RepoSource struct {
	BranchName    *string           `json:"branchName"`
	CommitSha     *string           `json:"commitSha"`
	Dir           *string           `json:"dir"`
	InvertRegex   *bool             `json:"invertRegex"`
	ProjectID     *string           `json:"projectId"`
	RepoName      *string           `json:"repoName"`
	Substitutions map[string]string `json:"substitutions"`
	TagName       *string           `json:"tagName"`
}
