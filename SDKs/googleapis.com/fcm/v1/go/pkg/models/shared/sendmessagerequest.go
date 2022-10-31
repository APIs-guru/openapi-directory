package shared



type SendMessageRequest struct {
    Message *Message `json:"message,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

