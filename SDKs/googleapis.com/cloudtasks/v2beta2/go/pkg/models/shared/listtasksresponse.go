package shared

type ListTasksResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tasks         []Task  `json:"tasks,omitempty"`
}
