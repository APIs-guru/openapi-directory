package shared



type ReceivedMessage struct {
    AckID *string `json:"ackId,omitempty"`
    Message *PubsubMessage `json:"message,omitempty"`
    
}

