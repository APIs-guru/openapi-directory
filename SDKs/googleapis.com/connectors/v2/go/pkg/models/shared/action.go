package shared

// Action
// Action message contains metadata information about a single action present in the external system.
type Action struct {
	InputParameters []InputParameter `json:"inputParameters,omitempty"`
	Name            *string          `json:"name,omitempty"`
	ResultMetadata  []ResultMetadata `json:"resultMetadata,omitempty"`
}
