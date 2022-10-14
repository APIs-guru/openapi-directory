package shared

type StopStreamResponse struct {
	Message *string `json:"message,omitempty"`
	UUID    *string `json:"uuid,omitempty"`
}
