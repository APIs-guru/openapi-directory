package shared

type GitHubEnterpriseConfig struct {
	AppID         *string                  `json:"appId"`
	CreateTime    *string                  `json:"createTime"`
	DisplayName   *string                  `json:"displayName"`
	HostURL       *string                  `json:"hostUrl"`
	Name          *string                  `json:"name"`
	PeeredNetwork *string                  `json:"peeredNetwork"`
	Secrets       *GitHubEnterpriseSecrets `json:"secrets"`
	SslCa         *string                  `json:"sslCa"`
	WebhookKey    *string                  `json:"webhookKey"`
}
