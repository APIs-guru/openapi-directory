package shared



type AcknowledgeRequest struct {
    AckID []string `json:"ackId,omitempty"`
    Subscription *string `json:"subscription,omitempty"`
    
}

