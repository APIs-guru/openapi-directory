package shared

type StartStreamResponse struct {
	Message *string `json:"message,omitempty"`
	UUID    *string `json:"uuid,omitempty"`
}
