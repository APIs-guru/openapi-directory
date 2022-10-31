package shared



type BitbucketServerSecrets struct {
    AdminAccessTokenVersionName *string `json:"adminAccessTokenVersionName,omitempty"`
    ReadAccessTokenVersionName *string `json:"readAccessTokenVersionName,omitempty"`
    WebhookSecretVersionName *string `json:"webhookSecretVersionName,omitempty"`
    
}

