package shared



type ModifyAckDeadlineRequest struct {
    AckDeadlineSeconds *int32 `json:"ackDeadlineSeconds,omitempty"`
    AckID *string `json:"ackId,omitempty"`
    AckIds []string `json:"ackIds,omitempty"`
    
}

