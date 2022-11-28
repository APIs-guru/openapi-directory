package shared

// GitLabRepositoryIDInput
// GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
type GitLabRepositoryIDInput struct {
	ID *string `json:"id,omitempty"`
}

// GitLabRepositoryID
// GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
type GitLabRepositoryID struct {
	ID        *string `json:"id,omitempty"`
	WebhookID *int32  `json:"webhookId,omitempty"`
}
