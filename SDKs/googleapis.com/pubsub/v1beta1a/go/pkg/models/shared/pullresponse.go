package shared



type PullResponse struct {
    AckID *string `json:"ackId,omitempty"`
    PubsubEvent *PubsubEvent `json:"pubsubEvent,omitempty"`
    
}

