package shared

type GitHubEventsConfig struct {
	EnterpriseConfigResourceName *string            `json:"enterpriseConfigResourceName"`
	InstallationID               *string            `json:"installationId"`
	Name                         *string            `json:"name"`
	Owner                        *string            `json:"owner"`
	PullRequest                  *PullRequestFilter `json:"pullRequest"`
	Push                         *PushFilter        `json:"push"`
}
