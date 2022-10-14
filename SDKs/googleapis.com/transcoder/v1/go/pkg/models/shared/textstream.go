package shared

type TextStream struct {
	Codec   *string       `json:"codec,omitempty"`
	Mapping []TextMapping `json:"mapping,omitempty"`
}
