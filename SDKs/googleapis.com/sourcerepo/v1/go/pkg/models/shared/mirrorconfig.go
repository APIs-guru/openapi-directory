package shared



type MirrorConfig struct {
    DeployKeyID *string `json:"deployKeyId,omitempty"`
    URL *string `json:"url,omitempty"`
    WebhookID *string `json:"webhookId,omitempty"`
    
}

