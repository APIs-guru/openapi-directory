package shared

type GoogleCloudMlV1ListJobsResponse struct {
	Jobs          []GoogleCloudMlV1Job `json:"jobs,omitempty"`
	NextPageToken *string              `json:"nextPageToken,omitempty"`
}
