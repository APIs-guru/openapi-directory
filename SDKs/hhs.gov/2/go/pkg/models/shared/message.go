package shared

type Message struct {
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorDetail  *string `json:"errorDetail,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	UserMessage  *string `json:"userMessage,omitempty"`
}
