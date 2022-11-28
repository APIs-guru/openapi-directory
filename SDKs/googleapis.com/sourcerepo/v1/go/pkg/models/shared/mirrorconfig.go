package shared

// MirrorConfig
// Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
type MirrorConfig struct {
	DeployKeyID *string `json:"deployKeyId,omitempty"`
	URL         *string `json:"url,omitempty"`
	WebhookID   *string `json:"webhookId,omitempty"`
}
