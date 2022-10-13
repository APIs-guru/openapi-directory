package shared

type ExecutionTemplateSpec struct {
	Metadata *ObjectMeta    `json:"metadata"`
	Spec     *ExecutionSpec `json:"spec"`
}
