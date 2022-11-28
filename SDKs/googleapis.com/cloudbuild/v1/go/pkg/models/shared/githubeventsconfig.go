package shared

// GitHubEventsConfig
// GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
type GitHubEventsConfig struct {
	EnterpriseConfigResourceName *string            `json:"enterpriseConfigResourceName,omitempty"`
	InstallationID               *string            `json:"installationId,omitempty"`
	Name                         *string            `json:"name,omitempty"`
	Owner                        *string            `json:"owner,omitempty"`
	PullRequest                  *PullRequestFilter `json:"pullRequest,omitempty"`
	Push                         *PushFilter        `json:"push,omitempty"`
}
