package shared

// ListJobsResponse
// List jobs response.
type ListJobsResponse struct {
	Jobs          []Job             `json:"jobs,omitempty"`
	Metadata      *ResponseMetadata `json:"metadata,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
