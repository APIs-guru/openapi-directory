package shared

// SendMessageRequest
// Request to send a message to specified target.
type SendMessageRequest struct {
	Message      *Message `json:"message,omitempty"`
	ValidateOnly *bool    `json:"validateOnly,omitempty"`
}
