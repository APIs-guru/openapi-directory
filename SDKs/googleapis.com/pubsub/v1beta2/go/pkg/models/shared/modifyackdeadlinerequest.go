package shared

// ModifyAckDeadlineRequest
// Request for the ModifyAckDeadline method.
type ModifyAckDeadlineRequest struct {
	AckDeadlineSeconds *int32   `json:"ackDeadlineSeconds,omitempty"`
	AckID              *string  `json:"ackId,omitempty"`
	AckIds             []string `json:"ackIds,omitempty"`
}
