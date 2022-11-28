package shared

// StreamingSideInputLocation
// Identifies the location of a streaming side input.
type StreamingSideInputLocation struct {
	StateFamily *string `json:"stateFamily,omitempty"`
	Tag         *string `json:"tag,omitempty"`
}
