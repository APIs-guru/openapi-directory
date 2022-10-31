package shared

type SearchProjectsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Projects      []Project `json:"projects,omitempty"`
}
