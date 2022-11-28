package shared

// TextStream
// Encoding of a text stream. For example, closed captions or subtitles.
type TextStream struct {
	Codec   *string       `json:"codec,omitempty"`
	Mapping []TextMapping `json:"mapping,omitempty"`
}
