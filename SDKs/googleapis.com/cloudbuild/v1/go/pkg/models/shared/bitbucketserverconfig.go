package shared

type BitbucketServerConfig struct {
	APIKey                *string                       `json:"apiKey"`
	ConnectedRepositories []BitbucketServerRepositoryID `json:"connectedRepositories"`
	CreateTime            *string                       `json:"createTime"`
	HostURI               *string                       `json:"hostUri"`
	Name                  *string                       `json:"name"`
	PeeredNetwork         *string                       `json:"peeredNetwork"`
	Secrets               *BitbucketServerSecrets       `json:"secrets"`
	SslCa                 *string                       `json:"sslCa"`
	Username              *string                       `json:"username"`
	WebhookKey            *string                       `json:"webhookKey"`
}
