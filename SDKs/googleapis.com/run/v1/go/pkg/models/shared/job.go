package shared



type Job struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Metadata *ObjectMeta `json:"metadata,omitempty"`
    Spec *JobSpec `json:"spec,omitempty"`
    Status *JobStatus `json:"status,omitempty"`
    
}

