package shared

// GitLabSecrets
// GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
type GitLabSecrets struct {
	APIAccessTokenVersion  *string `json:"apiAccessTokenVersion,omitempty"`
	APIKeyVersion          *string `json:"apiKeyVersion,omitempty"`
	ReadAccessTokenVersion *string `json:"readAccessTokenVersion,omitempty"`
	WebhookSecretVersion   *string `json:"webhookSecretVersion,omitempty"`
}
