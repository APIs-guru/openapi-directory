package shared

type GitLabEventsConfig struct {
	GitlabConfig         *GitLabConfig      `json:"gitlabConfig,omitempty"`
	GitlabConfigResource *string            `json:"gitlabConfigResource,omitempty"`
	ProjectNamespace     *string            `json:"projectNamespace,omitempty"`
	PullRequest          *PullRequestFilter `json:"pullRequest,omitempty"`
	Push                 *PushFilter        `json:"push,omitempty"`
}
