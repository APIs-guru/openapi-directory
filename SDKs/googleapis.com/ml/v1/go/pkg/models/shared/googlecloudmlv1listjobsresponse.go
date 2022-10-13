package shared

type GoogleCloudMlV1ListJobsResponse struct {
	Jobs          []GoogleCloudMlV1Job `json:"jobs"`
	NextPageToken *string              `json:"nextPageToken"`
}
