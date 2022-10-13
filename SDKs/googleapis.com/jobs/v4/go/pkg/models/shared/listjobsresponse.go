package shared

type ListJobsResponse struct {
	Jobs          []Job             `json:"jobs"`
	Metadata      *ResponseMetadata `json:"metadata"`
	NextPageToken *string           `json:"nextPageToken"`
}
