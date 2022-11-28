package shared

// Layer
// Layer holds metadata specific to a layer of a Docker image.
type Layer struct {
	Arguments *string `json:"arguments,omitempty"`
	Directive *string `json:"directive,omitempty"`
}
