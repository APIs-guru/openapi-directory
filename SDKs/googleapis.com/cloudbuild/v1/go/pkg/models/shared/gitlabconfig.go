package shared

// GitLabConfigInput
// GitLabConfig represents the configuration for a GitLab integration.
type GitLabConfigInput struct {
	ConnectedRepositories []GitLabRepositoryIDInput `json:"connectedRepositories,omitempty"`
	EnterpriseConfig      *GitLabEnterpriseConfig   `json:"enterpriseConfig,omitempty"`
	Name                  *string                   `json:"name,omitempty"`
	Secrets               *GitLabSecrets            `json:"secrets,omitempty"`
	Username              *string                   `json:"username,omitempty"`
}

// GitLabConfig
// GitLabConfig represents the configuration for a GitLab integration.
type GitLabConfig struct {
	ConnectedRepositories []GitLabRepositoryID    `json:"connectedRepositories,omitempty"`
	CreateTime            *string                 `json:"createTime,omitempty"`
	EnterpriseConfig      *GitLabEnterpriseConfig `json:"enterpriseConfig,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	Secrets               *GitLabSecrets          `json:"secrets,omitempty"`
	Username              *string                 `json:"username,omitempty"`
	WebhookKey            *string                 `json:"webhookKey,omitempty"`
}
