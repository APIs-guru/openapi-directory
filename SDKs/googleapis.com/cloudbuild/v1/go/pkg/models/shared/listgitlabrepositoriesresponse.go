package shared

type ListGitLabRepositoriesResponse struct {
	GitlabRepositories []GitLabRepository `json:"gitlabRepositories,omitempty"`
	NextPageToken      *string            `json:"nextPageToken,omitempty"`
}
