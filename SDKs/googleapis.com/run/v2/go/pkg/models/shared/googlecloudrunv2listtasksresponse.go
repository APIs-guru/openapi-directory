package shared

type GoogleCloudRunV2ListTasksResponse struct {
	NextPageToken *string                `json:"nextPageToken,omitempty"`
	Tasks         []GoogleCloudRunV2Task `json:"tasks,omitempty"`
}
