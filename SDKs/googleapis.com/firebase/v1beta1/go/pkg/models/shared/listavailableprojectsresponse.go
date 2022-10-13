package shared

type ListAvailableProjectsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	ProjectInfo   []ProjectInfo `json:"projectInfo"`
}
