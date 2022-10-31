package shared

type CreateJobFromTemplateRequest struct {
	Environment *RuntimeEnvironment `json:"environment,omitempty"`
	GcsPath     *string             `json:"gcsPath,omitempty"`
	JobName     *string             `json:"jobName,omitempty"`
	Location    *string             `json:"location,omitempty"`
	Parameters  map[string]string   `json:"parameters,omitempty"`
}
