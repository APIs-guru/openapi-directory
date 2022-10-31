package shared



type GitLabConfig struct {
    ConnectedRepositories []GitLabRepositoryID `json:"connectedRepositories,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EnterpriseConfig *GitLabEnterpriseConfig `json:"enterpriseConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    Secrets *GitLabSecrets `json:"secrets,omitempty"`
    Username *string `json:"username,omitempty"`
    WebhookKey *string `json:"webhookKey,omitempty"`
    
}

