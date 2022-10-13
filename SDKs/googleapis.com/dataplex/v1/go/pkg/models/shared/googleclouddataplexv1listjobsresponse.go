package shared

type GoogleCloudDataplexV1ListJobsResponse struct {
	Jobs          []GoogleCloudDataplexV1Job `json:"jobs"`
	NextPageToken *string                    `json:"nextPageToken"`
}
