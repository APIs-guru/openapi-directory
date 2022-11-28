package shared

// GoogleCloudRunV2ListExecutionsResponse
// Response message containing a list of Executions.
type GoogleCloudRunV2ListExecutionsResponse struct {
	Executions    []GoogleCloudRunV2Execution `json:"executions,omitempty"`
	NextPageToken *string                     `json:"nextPageToken,omitempty"`
}
