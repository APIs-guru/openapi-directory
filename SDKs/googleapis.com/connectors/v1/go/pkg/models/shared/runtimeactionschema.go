package shared



type RuntimeActionSchema struct {
    Action *string `json:"action,omitempty"`
    InputParameters []InputParameter `json:"inputParameters,omitempty"`
    ResultMetadata []ResultMetadata `json:"resultMetadata,omitempty"`
    
}

