package shared

// Accelerator
// Carries information about an accelerator that can be attached to a VM.
type Accelerator struct {
	Count *string `json:"count,omitempty"`
	Type  *string `json:"type,omitempty"`
}
