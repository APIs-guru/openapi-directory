package shared

// ProjectsListResponse
// Project List Response
type ProjectsListResponse struct {
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Projects      []Project `json:"projects,omitempty"`
}
