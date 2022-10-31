package shared



type ListGitLabConfigsResponse struct {
    GitlabConfigs []GitLabConfig `json:"gitlabConfigs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

