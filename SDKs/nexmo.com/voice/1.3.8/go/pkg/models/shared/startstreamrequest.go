package shared

type StartStreamRequest struct {
	Level     *string  `json:"level"`
	Loop      *int64   `json:"loop"`
	StreamURL []string `json:"stream_url"`
}
