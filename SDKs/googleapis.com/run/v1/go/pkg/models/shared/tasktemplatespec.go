package shared

// TaskTemplateSpec
// TaskTemplateSpec describes the data a task should have when created from a template.
type TaskTemplateSpec struct {
	Spec *TaskSpec `json:"spec,omitempty"`
}
