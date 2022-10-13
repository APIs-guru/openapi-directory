package shared

type ListGitLabConfigsResponse struct {
	GitlabConfigs []GitLabConfig `json:"gitlabConfigs"`
	NextPageToken *string        `json:"nextPageToken"`
}
