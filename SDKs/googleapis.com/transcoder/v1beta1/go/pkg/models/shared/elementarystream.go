package shared

// ElementaryStream
// Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
type ElementaryStream struct {
	AudioStream *AudioStream `json:"audioStream,omitempty"`
	Key         *string      `json:"key,omitempty"`
	TextStream  *TextStream  `json:"textStream,omitempty"`
	VideoStream *VideoStream `json:"videoStream,omitempty"`
}
