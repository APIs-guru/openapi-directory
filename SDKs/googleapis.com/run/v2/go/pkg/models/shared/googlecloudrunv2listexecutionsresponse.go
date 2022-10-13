package shared

type GoogleCloudRunV2ListExecutionsResponse struct {
	Executions    []GoogleCloudRunV2Execution `json:"executions"`
	NextPageToken *string                     `json:"nextPageToken"`
}
