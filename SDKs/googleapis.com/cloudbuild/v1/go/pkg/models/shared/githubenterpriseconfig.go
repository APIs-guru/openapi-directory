package shared



type GitHubEnterpriseConfig struct {
    AppID *string `json:"appId,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    HostURL *string `json:"hostUrl,omitempty"`
    Name *string `json:"name,omitempty"`
    PeeredNetwork *string `json:"peeredNetwork,omitempty"`
    Secrets *GitHubEnterpriseSecrets `json:"secrets,omitempty"`
    SslCa *string `json:"sslCa,omitempty"`
    WebhookKey *string `json:"webhookKey,omitempty"`
    
}

