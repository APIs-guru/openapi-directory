package shared

type GitLabEventsConfig struct {
	GitlabConfig         *GitLabConfig      `json:"gitlabConfig"`
	GitlabConfigResource *string            `json:"gitlabConfigResource"`
	ProjectNamespace     *string            `json:"projectNamespace"`
	PullRequest          *PullRequestFilter `json:"pullRequest"`
	Push                 *PushFilter        `json:"push"`
}
