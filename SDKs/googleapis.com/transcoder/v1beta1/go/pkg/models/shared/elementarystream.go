package shared

type ElementaryStream struct {
	AudioStream *AudioStream `json:"audioStream"`
	Key         *string      `json:"key"`
	TextStream  *TextStream  `json:"textStream"`
	VideoStream *VideoStream `json:"videoStream"`
}
