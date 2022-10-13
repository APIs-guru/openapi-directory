package shared

type Task struct {
	APIVersion *string     `json:"apiVersion"`
	Kind       *string     `json:"kind"`
	Metadata   *ObjectMeta `json:"metadata"`
	Spec       *TaskSpec   `json:"spec"`
	Status     *TaskStatus `json:"status"`
}
