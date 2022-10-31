package shared



type ExecutionTemplateSpec struct {
    Metadata *ObjectMeta `json:"metadata,omitempty"`
    Spec *ExecutionSpec `json:"spec,omitempty"`
    
}

