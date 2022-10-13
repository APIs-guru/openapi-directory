package shared

type SendMessageRequest struct {
	Message      *Message `json:"message"`
	ValidateOnly *bool    `json:"validateOnly"`
}
