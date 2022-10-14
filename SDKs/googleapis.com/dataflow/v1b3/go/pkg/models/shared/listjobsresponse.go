package shared

type ListJobsResponse struct {
	FailedLocation []FailedLocation `json:"failedLocation,omitempty"`
	Jobs           []Job            `json:"jobs,omitempty"`
	NextPageToken  *string          `json:"nextPageToken,omitempty"`
}
