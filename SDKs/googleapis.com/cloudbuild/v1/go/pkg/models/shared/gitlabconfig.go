package shared

type GitLabConfig struct {
	ConnectedRepositories []GitLabRepositoryID    `json:"connectedRepositories"`
	CreateTime            *string                 `json:"createTime"`
	EnterpriseConfig      *GitLabEnterpriseConfig `json:"enterpriseConfig"`
	Name                  *string                 `json:"name"`
	Secrets               *GitLabSecrets          `json:"secrets"`
	Username              *string                 `json:"username"`
	WebhookKey            *string                 `json:"webhookKey"`
}
