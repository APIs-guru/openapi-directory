package shared

// CreateJobFromTemplateRequest
// A request to create a Cloud Dataflow job from a template.
type CreateJobFromTemplateRequest struct {
	Environment *RuntimeEnvironment `json:"environment,omitempty"`
	GcsPath     *string             `json:"gcsPath,omitempty"`
	JobName     *string             `json:"jobName,omitempty"`
	Location    *string             `json:"location,omitempty"`
	Parameters  map[string]string   `json:"parameters,omitempty"`
}
