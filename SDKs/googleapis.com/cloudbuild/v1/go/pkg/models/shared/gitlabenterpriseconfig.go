package shared

type GitLabEnterpriseConfig struct {
	HostURI                *string                 `json:"hostUri,omitempty"`
	ServiceDirectoryConfig *ServiceDirectoryConfig `json:"serviceDirectoryConfig,omitempty"`
	SslCa                  *string                 `json:"sslCa,omitempty"`
}
