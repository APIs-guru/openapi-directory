package shared

type BitbucketServerSecrets struct {
	AdminAccessTokenVersionName *string `json:"adminAccessTokenVersionName"`
	ReadAccessTokenVersionName  *string `json:"readAccessTokenVersionName"`
	WebhookSecretVersionName    *string `json:"webhookSecretVersionName"`
}
