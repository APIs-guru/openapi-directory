package shared

type BitbucketServerTriggerConfig struct {
	BitbucketServerConfig         *BitbucketServerConfig `json:"bitbucketServerConfig"`
	BitbucketServerConfigResource *string                `json:"bitbucketServerConfigResource"`
	ProjectKey                    *string                `json:"projectKey"`
	PullRequest                   *PullRequestFilter     `json:"pullRequest"`
	Push                          *PushFilter            `json:"push"`
	RepoSlug                      *string                `json:"repoSlug"`
}
