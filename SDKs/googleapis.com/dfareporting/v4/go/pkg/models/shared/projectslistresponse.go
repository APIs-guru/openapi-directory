package shared

type ProjectsListResponse struct {
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	Projects      []Project `json:"projects"`
}
