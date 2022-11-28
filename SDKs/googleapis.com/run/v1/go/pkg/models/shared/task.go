package shared

// Task
// Task represents a single run of a container to completion.
type Task struct {
	APIVersion *string     `json:"apiVersion,omitempty"`
	Kind       *string     `json:"kind,omitempty"`
	Metadata   *ObjectMeta `json:"metadata,omitempty"`
	Spec       *TaskSpec   `json:"spec,omitempty"`
	Status     *TaskStatus `json:"status,omitempty"`
}
