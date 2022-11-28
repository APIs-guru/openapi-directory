package shared

// BatchGetMessagesResponse
// Gets multiple messages in a specified HL7v2 store.
type BatchGetMessagesResponse struct {
	Messages []Message `json:"messages,omitempty"`
}
