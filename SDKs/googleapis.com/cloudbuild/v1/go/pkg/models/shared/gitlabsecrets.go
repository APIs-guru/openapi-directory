package shared

type GitLabSecrets struct {
	APIAccessTokenVersion  *string `json:"apiAccessTokenVersion"`
	APIKeyVersion          *string `json:"apiKeyVersion"`
	ReadAccessTokenVersion *string `json:"readAccessTokenVersion"`
	WebhookSecretVersion   *string `json:"webhookSecretVersion"`
}
