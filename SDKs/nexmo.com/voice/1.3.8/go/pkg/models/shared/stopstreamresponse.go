package shared

type StopStreamResponse struct {
	Message *string `json:"message"`
	UUID    *string `json:"uuid"`
}
