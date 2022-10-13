package shared

type SearchProjectsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Projects      []Project `json:"projects"`
}
