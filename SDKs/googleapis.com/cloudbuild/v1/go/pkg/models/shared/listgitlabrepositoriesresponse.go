package shared

// ListGitLabRepositoriesResponse
// RPC response object returned by the ListGitLabRepositories RPC method.
type ListGitLabRepositoriesResponse struct {
	GitlabRepositories []GitLabRepository `json:"gitlabRepositories,omitempty"`
	NextPageToken      *string            `json:"nextPageToken,omitempty"`
}
