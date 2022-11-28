package shared

// ListTasksResponse
// Response message for listing tasks using ListTasks.
type ListTasksResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tasks         []Task  `json:"tasks,omitempty"`
}
