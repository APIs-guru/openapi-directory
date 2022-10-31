package shared

type BatchGetMessagesResponse struct {
	Messages []Message `json:"messages,omitempty"`
}
