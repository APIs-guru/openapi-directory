package shared

// SynthesisInput
// Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
type SynthesisInput struct {
	Ssml *string `json:"ssml,omitempty"`
	Text *string `json:"text,omitempty"`
}
