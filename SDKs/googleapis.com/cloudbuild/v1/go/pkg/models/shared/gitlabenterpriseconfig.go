package shared

type GitLabEnterpriseConfig struct {
	HostURI                *string                 `json:"hostUri"`
	ServiceDirectoryConfig *ServiceDirectoryConfig `json:"serviceDirectoryConfig"`
	SslCa                  *string                 `json:"sslCa"`
}
