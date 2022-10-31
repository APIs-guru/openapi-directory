package shared

type StartTalkResponse struct {
	Message *string `json:"message,omitempty"`
	UUID    *string `json:"uuid,omitempty"`
}
