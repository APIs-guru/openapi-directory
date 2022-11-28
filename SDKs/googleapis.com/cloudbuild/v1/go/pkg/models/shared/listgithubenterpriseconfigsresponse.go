package shared

// ListGithubEnterpriseConfigsResponse
// RPC response object returned by ListGithubEnterpriseConfigs RPC method.
type ListGithubEnterpriseConfigsResponse struct {
	Configs []GitHubEnterpriseConfig `json:"configs,omitempty"`
}
