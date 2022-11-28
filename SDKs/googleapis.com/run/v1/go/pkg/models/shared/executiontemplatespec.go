package shared

// ExecutionTemplateSpec
// ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
type ExecutionTemplateSpec struct {
	Metadata *ObjectMeta    `json:"metadata,omitempty"`
	Spec     *ExecutionSpec `json:"spec,omitempty"`
}
