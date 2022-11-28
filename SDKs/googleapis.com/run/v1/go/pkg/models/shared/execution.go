package shared

// Execution
// Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
type Execution struct {
	APIVersion *string          `json:"apiVersion,omitempty"`
	Kind       *string          `json:"kind,omitempty"`
	Metadata   *ObjectMeta      `json:"metadata,omitempty"`
	Spec       *ExecutionSpec   `json:"spec,omitempty"`
	Status     *ExecutionStatus `json:"status,omitempty"`
}
