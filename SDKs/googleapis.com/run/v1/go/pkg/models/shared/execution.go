package shared

type Execution struct {
	APIVersion *string          `json:"apiVersion"`
	Kind       *string          `json:"kind"`
	Metadata   *ObjectMeta      `json:"metadata"`
	Spec       *ExecutionSpec   `json:"spec"`
	Status     *ExecutionStatus `json:"status"`
}
