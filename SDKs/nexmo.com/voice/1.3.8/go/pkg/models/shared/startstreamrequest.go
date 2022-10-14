package shared

type StartStreamRequest struct {
	Level     *string  `json:"level,omitempty"`
	Loop      *int64   `json:"loop,omitempty"`
	StreamURL []string `json:"stream_url"`
}
