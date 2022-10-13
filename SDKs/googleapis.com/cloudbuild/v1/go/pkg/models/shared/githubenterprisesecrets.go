package shared

type GitHubEnterpriseSecrets struct {
	OauthClientIDName        *string `json:"oauthClientIdName"`
	OauthClientIDVersionName *string `json:"oauthClientIdVersionName"`
	OauthSecretName          *string `json:"oauthSecretName"`
	OauthSecretVersionName   *string `json:"oauthSecretVersionName"`
	PrivateKeyName           *string `json:"privateKeyName"`
	PrivateKeyVersionName    *string `json:"privateKeyVersionName"`
	WebhookSecretName        *string `json:"webhookSecretName"`
	WebhookSecretVersionName *string `json:"webhookSecretVersionName"`
}
