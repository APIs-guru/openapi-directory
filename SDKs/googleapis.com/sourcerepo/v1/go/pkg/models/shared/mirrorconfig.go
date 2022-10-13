package shared

type MirrorConfig struct {
	DeployKeyID *string `json:"deployKeyId"`
	URL         *string `json:"url"`
	WebhookID   *string `json:"webhookId"`
}
