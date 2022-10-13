package shared

type ListGitLabRepositoriesResponse struct {
	GitlabRepositories []GitLabRepository `json:"gitlabRepositories"`
	NextPageToken      *string            `json:"nextPageToken"`
}
