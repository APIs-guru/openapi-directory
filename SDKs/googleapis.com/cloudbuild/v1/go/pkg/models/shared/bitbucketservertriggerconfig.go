package shared



type BitbucketServerTriggerConfig struct {
    BitbucketServerConfig *BitbucketServerConfig `json:"bitbucketServerConfig,omitempty"`
    BitbucketServerConfigResource *string `json:"bitbucketServerConfigResource,omitempty"`
    ProjectKey *string `json:"projectKey,omitempty"`
    PullRequest *PullRequestFilter `json:"pullRequest,omitempty"`
    Push *PushFilter `json:"push,omitempty"`
    RepoSlug *string `json:"repoSlug,omitempty"`
    
}

