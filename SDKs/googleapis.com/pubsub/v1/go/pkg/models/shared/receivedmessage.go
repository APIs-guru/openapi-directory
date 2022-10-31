package shared



type ReceivedMessage struct {
    AckID *string `json:"ackId,omitempty"`
    DeliveryAttempt *int32 `json:"deliveryAttempt,omitempty"`
    Message *PubsubMessage `json:"message,omitempty"`
    
}

