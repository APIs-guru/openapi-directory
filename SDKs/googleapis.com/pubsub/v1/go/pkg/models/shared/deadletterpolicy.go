package shared



type DeadLetterPolicy struct {
    DeadLetterTopic *string `json:"deadLetterTopic,omitempty"`
    MaxDeliveryAttempts *int32 `json:"maxDeliveryAttempts,omitempty"`
    
}

