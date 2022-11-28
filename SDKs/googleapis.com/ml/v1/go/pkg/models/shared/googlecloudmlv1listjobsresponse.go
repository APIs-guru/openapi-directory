package shared

// GoogleCloudMlV1ListJobsResponse
// Response message for the ListJobs method.
type GoogleCloudMlV1ListJobsResponse struct {
	Jobs          []GoogleCloudMlV1Job `json:"jobs,omitempty"`
	NextPageToken *string              `json:"nextPageToken,omitempty"`
}
