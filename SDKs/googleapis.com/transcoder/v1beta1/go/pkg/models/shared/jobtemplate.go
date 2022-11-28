package shared

// JobTemplate
// Transcoding job template resource.
type JobTemplate struct {
	Config *JobConfig `json:"config,omitempty"`
	Name   *string    `json:"name,omitempty"`
}
