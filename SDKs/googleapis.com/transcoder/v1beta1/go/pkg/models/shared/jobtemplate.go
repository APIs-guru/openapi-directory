package shared

type JobTemplate struct {
	Config *JobConfig `json:"config"`
	Name   *string    `json:"name"`
}
