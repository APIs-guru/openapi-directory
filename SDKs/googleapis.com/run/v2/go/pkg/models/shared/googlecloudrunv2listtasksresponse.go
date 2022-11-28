package shared

// GoogleCloudRunV2ListTasksResponse
// Response message containing a list of Tasks.
type GoogleCloudRunV2ListTasksResponse struct {
	NextPageToken *string                `json:"nextPageToken,omitempty"`
	Tasks         []GoogleCloudRunV2Task `json:"tasks,omitempty"`
}
