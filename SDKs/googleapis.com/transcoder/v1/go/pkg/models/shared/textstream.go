package shared

type TextStream struct {
	Codec   *string       `json:"codec"`
	Mapping []TextMapping `json:"mapping"`
}
