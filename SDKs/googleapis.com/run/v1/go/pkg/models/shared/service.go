package shared



type Service struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Metadata *ObjectMeta `json:"metadata,omitempty"`
    Spec *ServiceSpec `json:"spec,omitempty"`
    Status *ServiceStatus `json:"status,omitempty"`
    
}

