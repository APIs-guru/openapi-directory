package shared

// TensorFlowVersion
// A tensorflow version that a Node can be configured with.
type TensorFlowVersion struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
