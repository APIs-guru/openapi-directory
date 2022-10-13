package shared

type RepoSource struct {
	BranchName *string `json:"branchName"`
	CommitSha  *string `json:"commitSha"`
	ProjectID  *string `json:"projectId"`
	RepoName   *string `json:"repoName"`
	TagName    *string `json:"tagName"`
}
