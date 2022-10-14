package shared

type Execution struct {
	APIVersion *string          `json:"apiVersion,omitempty"`
	Kind       *string          `json:"kind,omitempty"`
	Metadata   *ObjectMeta      `json:"metadata,omitempty"`
	Spec       *ExecutionSpec   `json:"spec,omitempty"`
	Status     *ExecutionStatus `json:"status,omitempty"`
}
