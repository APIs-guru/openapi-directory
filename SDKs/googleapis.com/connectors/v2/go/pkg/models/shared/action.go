package shared



type Action struct {
    InputParameters []InputParameter `json:"inputParameters,omitempty"`
    Name *string `json:"name,omitempty"`
    ResultMetadata []ResultMetadata `json:"resultMetadata,omitempty"`
    
}

