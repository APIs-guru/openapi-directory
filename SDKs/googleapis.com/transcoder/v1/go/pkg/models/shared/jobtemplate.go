package shared

type JobTemplate struct {
	Config *JobConfig        `json:"config"`
	Labels map[string]string `json:"labels"`
	Name   *string           `json:"name"`
}
