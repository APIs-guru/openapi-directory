package shared

type CreateMessageRequest struct {
	Message *Message `json:"message,omitempty"`
}
