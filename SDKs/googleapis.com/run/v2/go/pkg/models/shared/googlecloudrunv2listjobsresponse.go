package shared

type GoogleCloudRunV2ListJobsResponse struct {
	Jobs          []GoogleCloudRunV2Job `json:"jobs"`
	NextPageToken *string               `json:"nextPageToken"`
}
