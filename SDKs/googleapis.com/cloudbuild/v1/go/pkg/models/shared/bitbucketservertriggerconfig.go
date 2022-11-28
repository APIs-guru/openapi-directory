package shared

// BitbucketServerTriggerConfig
// BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
type BitbucketServerTriggerConfig struct {
	BitbucketServerConfig         *BitbucketServerConfig `json:"bitbucketServerConfig,omitempty"`
	BitbucketServerConfigResource *string                `json:"bitbucketServerConfigResource,omitempty"`
	ProjectKey                    *string                `json:"projectKey,omitempty"`
	PullRequest                   *PullRequestFilter     `json:"pullRequest,omitempty"`
	Push                          *PushFilter            `json:"push,omitempty"`
	RepoSlug                      *string                `json:"repoSlug,omitempty"`
}

// BitbucketServerTriggerConfigInput
// BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
type BitbucketServerTriggerConfigInput struct {
	BitbucketServerConfig         *BitbucketServerConfigInput `json:"bitbucketServerConfig,omitempty"`
	BitbucketServerConfigResource *string                     `json:"bitbucketServerConfigResource,omitempty"`
	ProjectKey                    *string                     `json:"projectKey,omitempty"`
	PullRequest                   *PullRequestFilter          `json:"pullRequest,omitempty"`
	Push                          *PushFilter                 `json:"push,omitempty"`
	RepoSlug                      *string                     `json:"repoSlug,omitempty"`
}
