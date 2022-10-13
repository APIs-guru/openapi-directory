package shared

type ListJobsResponse struct {
	FailedLocation []FailedLocation `json:"failedLocation"`
	Jobs           []Job            `json:"jobs"`
	NextPageToken  *string          `json:"nextPageToken"`
}
