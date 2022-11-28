package shared

// BitbucketServerSecrets
// BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
type BitbucketServerSecrets struct {
	AdminAccessTokenVersionName *string `json:"adminAccessTokenVersionName,omitempty"`
	ReadAccessTokenVersionName  *string `json:"readAccessTokenVersionName,omitempty"`
	WebhookSecretVersionName    *string `json:"webhookSecretVersionName,omitempty"`
}
