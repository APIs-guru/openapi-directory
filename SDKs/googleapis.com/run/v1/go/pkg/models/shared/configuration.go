package shared



type Configuration struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Metadata *ObjectMeta `json:"metadata,omitempty"`
    Spec *ConfigurationSpec `json:"spec,omitempty"`
    Status *ConfigurationStatus `json:"status,omitempty"`
    
}

