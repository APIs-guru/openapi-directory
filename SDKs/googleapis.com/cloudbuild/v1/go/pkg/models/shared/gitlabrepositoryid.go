package shared

type GitLabRepositoryID struct {
	ID        *string `json:"id"`
	WebhookID *int32  `json:"webhookId"`
}
