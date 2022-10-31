package shared

type GitLabRepositoryID struct {
	ID        *string `json:"id,omitempty"`
	WebhookID *int32  `json:"webhookId,omitempty"`
}
