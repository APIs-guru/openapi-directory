package shared

type StartTalkResponse struct {
	Message *string `json:"message"`
	UUID    *string `json:"uuid"`
}
