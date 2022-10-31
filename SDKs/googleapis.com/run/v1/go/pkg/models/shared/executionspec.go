package shared



type ExecutionSpec struct {
    Parallelism *int32 `json:"parallelism,omitempty"`
    TaskCount *int32 `json:"taskCount,omitempty"`
    Template *TaskTemplateSpec `json:"template,omitempty"`
    
}

