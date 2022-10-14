package shared

type GoogleCloudDataplexV1ListJobsResponse struct {
	Jobs          []GoogleCloudDataplexV1Job `json:"jobs,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
