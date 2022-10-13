package shared

type RepoSource struct {
	BranchName  *string `json:"branchName"`
	CommitSha   *string `json:"commitSha"`
	Dir         *string `json:"dir"`
	InvertRegex *bool   `json:"invertRegex"`
	ProjectID   *string `json:"projectId"`
	RepoName    *string `json:"repoName"`
	TagName     *string `json:"tagName"`
}
