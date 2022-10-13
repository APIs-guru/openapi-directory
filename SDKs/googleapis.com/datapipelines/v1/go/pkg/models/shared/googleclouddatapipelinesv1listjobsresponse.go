package shared

type GoogleCloudDatapipelinesV1ListJobsResponse struct {
	Jobs          []GoogleCloudDatapipelinesV1Job `json:"jobs"`
	NextPageToken *string                         `json:"nextPageToken"`
}
