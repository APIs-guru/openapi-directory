package shared

type StreamingSideInputLocation struct {
	StateFamily *string `json:"stateFamily"`
	Tag         *string `json:"tag"`
}
