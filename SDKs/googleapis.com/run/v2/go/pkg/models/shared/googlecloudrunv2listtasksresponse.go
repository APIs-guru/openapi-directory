package shared

type GoogleCloudRunV2ListTasksResponse struct {
	NextPageToken *string                `json:"nextPageToken"`
	Tasks         []GoogleCloudRunV2Task `json:"tasks"`
}
