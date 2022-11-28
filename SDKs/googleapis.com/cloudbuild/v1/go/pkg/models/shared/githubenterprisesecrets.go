package shared

// GitHubEnterpriseSecrets
// GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
type GitHubEnterpriseSecrets struct {
	OauthClientIDName        *string `json:"oauthClientIdName,omitempty"`
	OauthClientIDVersionName *string `json:"oauthClientIdVersionName,omitempty"`
	OauthSecretName          *string `json:"oauthSecretName,omitempty"`
	OauthSecretVersionName   *string `json:"oauthSecretVersionName,omitempty"`
	PrivateKeyName           *string `json:"privateKeyName,omitempty"`
	PrivateKeyVersionName    *string `json:"privateKeyVersionName,omitempty"`
	WebhookSecretName        *string `json:"webhookSecretName,omitempty"`
	WebhookSecretVersionName *string `json:"webhookSecretVersionName,omitempty"`
}
