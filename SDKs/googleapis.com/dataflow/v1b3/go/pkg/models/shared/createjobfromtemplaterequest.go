package shared

type CreateJobFromTemplateRequest struct {
	Environment *RuntimeEnvironment `json:"environment"`
	GcsPath     *string             `json:"gcsPath"`
	JobName     *string             `json:"jobName"`
	Location    *string             `json:"location"`
	Parameters  map[string]string   `json:"parameters"`
}
