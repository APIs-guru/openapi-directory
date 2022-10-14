package shared

type GitLabSecrets struct {
	APIAccessTokenVersion  *string `json:"apiAccessTokenVersion,omitempty"`
	APIKeyVersion          *string `json:"apiKeyVersion,omitempty"`
	ReadAccessTokenVersion *string `json:"readAccessTokenVersion,omitempty"`
	WebhookSecretVersion   *string `json:"webhookSecretVersion,omitempty"`
}
