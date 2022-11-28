package shared

// RuntimeActionSchema
// Schema of a runtime action.
type RuntimeActionSchema struct {
	Action          *string          `json:"action,omitempty"`
	InputParameters []InputParameter `json:"inputParameters,omitempty"`
	ResultMetadata  []ResultMetadata `json:"resultMetadata,omitempty"`
}
