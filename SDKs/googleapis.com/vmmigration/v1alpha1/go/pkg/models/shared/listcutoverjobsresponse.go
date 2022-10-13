package shared

type ListCutoverJobsResponse struct {
	CutoverJobs   []CutoverJob `json:"cutoverJobs"`
	NextPageToken *string      `json:"nextPageToken"`
	Unreachable   []string     `json:"unreachable"`
}
