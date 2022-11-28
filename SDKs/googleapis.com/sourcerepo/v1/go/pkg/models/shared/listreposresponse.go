package shared

// ListReposResponse
// Response for ListRepos. The size is not set in the returned repositories.
type ListReposResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Repos         []Repo  `json:"repos,omitempty"`
}
