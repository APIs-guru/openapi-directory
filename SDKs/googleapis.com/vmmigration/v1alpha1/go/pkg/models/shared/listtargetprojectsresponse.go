package shared

type ListTargetProjectsResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	TargetProjects []TargetProject `json:"targetProjects"`
	Unreachable    []string        `json:"unreachable"`
}
