package shared

// JobTemplate
// Transcoding job template resource.
type JobTemplate struct {
	Config *JobConfig        `json:"config,omitempty"`
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
}
