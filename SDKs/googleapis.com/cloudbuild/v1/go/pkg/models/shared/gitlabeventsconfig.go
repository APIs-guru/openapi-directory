package shared

// GitLabEventsConfigInput
// GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
type GitLabEventsConfigInput struct {
	GitlabConfig         *GitLabConfigInput `json:"gitlabConfig,omitempty"`
	GitlabConfigResource *string            `json:"gitlabConfigResource,omitempty"`
	ProjectNamespace     *string            `json:"projectNamespace,omitempty"`
	PullRequest          *PullRequestFilter `json:"pullRequest,omitempty"`
	Push                 *PushFilter        `json:"push,omitempty"`
}

// GitLabEventsConfig
// GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
type GitLabEventsConfig struct {
	GitlabConfig         *GitLabConfig      `json:"gitlabConfig,omitempty"`
	GitlabConfigResource *string            `json:"gitlabConfigResource,omitempty"`
	ProjectNamespace     *string            `json:"projectNamespace,omitempty"`
	PullRequest          *PullRequestFilter `json:"pullRequest,omitempty"`
	Push                 *PushFilter        `json:"push,omitempty"`
}
