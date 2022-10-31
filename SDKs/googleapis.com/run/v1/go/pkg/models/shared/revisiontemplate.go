package shared



type RevisionTemplate struct {
    Metadata *ObjectMeta `json:"metadata,omitempty"`
    Spec *RevisionSpec `json:"spec,omitempty"`
    
}

