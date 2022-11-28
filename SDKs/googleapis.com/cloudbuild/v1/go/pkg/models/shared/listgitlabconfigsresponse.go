package shared

// ListGitLabConfigsResponse
// RPC response object returned by ListGitLabConfigs RPC method.
type ListGitLabConfigsResponse struct {
	GitlabConfigs []GitLabConfig `json:"gitlabConfigs,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
