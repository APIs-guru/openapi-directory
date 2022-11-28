package shared

// RuntimeVersion
// A runtime version that a Node can be configured with.
type RuntimeVersion struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
