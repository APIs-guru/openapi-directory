package shared

// BitbucketServerConfigInput
// BitbucketServerConfig represents the configuration for a Bitbucket Server.
type BitbucketServerConfigInput struct {
	APIKey        *string                 `json:"apiKey,omitempty"`
	CreateTime    *string                 `json:"createTime,omitempty"`
	HostURI       *string                 `json:"hostUri,omitempty"`
	Name          *string                 `json:"name,omitempty"`
	PeeredNetwork *string                 `json:"peeredNetwork,omitempty"`
	Secrets       *BitbucketServerSecrets `json:"secrets,omitempty"`
	SslCa         *string                 `json:"sslCa,omitempty"`
	Username      *string                 `json:"username,omitempty"`
}

// BitbucketServerConfig
// BitbucketServerConfig represents the configuration for a Bitbucket Server.
type BitbucketServerConfig struct {
	APIKey                *string                       `json:"apiKey,omitempty"`
	ConnectedRepositories []BitbucketServerRepositoryID `json:"connectedRepositories,omitempty"`
	CreateTime            *string                       `json:"createTime,omitempty"`
	HostURI               *string                       `json:"hostUri,omitempty"`
	Name                  *string                       `json:"name,omitempty"`
	PeeredNetwork         *string                       `json:"peeredNetwork,omitempty"`
	Secrets               *BitbucketServerSecrets       `json:"secrets,omitempty"`
	SslCa                 *string                       `json:"sslCa,omitempty"`
	Username              *string                       `json:"username,omitempty"`
	WebhookKey            *string                       `json:"webhookKey,omitempty"`
}
