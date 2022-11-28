package shared

// GoogleCloudRunV2ExecutionTemplate
// ExecutionTemplate describes the data an execution should have when created from a template.
type GoogleCloudRunV2ExecutionTemplate struct {
	Annotations map[string]string             `json:"annotations,omitempty"`
	Labels      map[string]string             `json:"labels,omitempty"`
	Parallelism *int32                        `json:"parallelism,omitempty"`
	TaskCount   *int32                        `json:"taskCount,omitempty"`
	Template    *GoogleCloudRunV2TaskTemplate `json:"template,omitempty"`
}
