package shared

type ExecutionSpec struct {
	Parallelism *int32            `json:"parallelism"`
	TaskCount   *int32            `json:"taskCount"`
	Template    *TaskTemplateSpec `json:"template"`
}
