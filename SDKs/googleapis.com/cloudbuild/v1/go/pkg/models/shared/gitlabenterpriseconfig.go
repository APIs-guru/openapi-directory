package shared

// GitLabEnterpriseConfig
// GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
type GitLabEnterpriseConfig struct {
	HostURI                *string                 `json:"hostUri,omitempty"`
	ServiceDirectoryConfig *ServiceDirectoryConfig `json:"serviceDirectoryConfig,omitempty"`
	SslCa                  *string                 `json:"sslCa,omitempty"`
}
