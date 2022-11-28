package shared

// JobSpec
// JobSpec describes how the job will look.
type JobSpec struct {
	Template *ExecutionTemplateSpec `json:"template,omitempty"`
}
