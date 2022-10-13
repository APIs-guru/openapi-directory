package shared

type ListTasksResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Tasks         []Task  `json:"tasks"`
}
