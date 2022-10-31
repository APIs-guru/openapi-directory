package shared

type StreamingSideInputLocation struct {
	StateFamily *string `json:"stateFamily,omitempty"`
	Tag         *string `json:"tag,omitempty"`
}
