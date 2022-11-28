package shared

// AcceleratorType
// A accelerator type that a Node can be configured with.
type AcceleratorType struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}
