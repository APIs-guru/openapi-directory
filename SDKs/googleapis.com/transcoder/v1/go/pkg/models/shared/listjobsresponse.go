package shared

type ListJobsResponse struct {
	Jobs          []Job    `json:"jobs"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
