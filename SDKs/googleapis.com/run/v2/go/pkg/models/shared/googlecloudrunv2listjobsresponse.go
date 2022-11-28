package shared

// GoogleCloudRunV2ListJobsResponse
// Response message containing a list of Jobs.
type GoogleCloudRunV2ListJobsResponse struct {
	Jobs          []GoogleCloudRunV2Job `json:"jobs,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
}
