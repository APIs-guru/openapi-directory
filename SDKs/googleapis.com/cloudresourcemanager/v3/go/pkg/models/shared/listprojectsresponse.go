package shared

type ListProjectsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Projects      []Project `json:"projects"`
}
