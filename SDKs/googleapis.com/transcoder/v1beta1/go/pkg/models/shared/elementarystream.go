package shared

type ElementaryStream struct {
	AudioStream *AudioStream `json:"audioStream,omitempty"`
	Key         *string      `json:"key,omitempty"`
	TextStream  *TextStream  `json:"textStream,omitempty"`
	VideoStream *VideoStream `json:"videoStream,omitempty"`
}
