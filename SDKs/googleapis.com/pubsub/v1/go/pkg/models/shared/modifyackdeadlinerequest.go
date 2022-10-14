package shared

type ModifyAckDeadlineRequest struct {
	AckDeadlineSeconds *int32   `json:"ackDeadlineSeconds,omitempty"`
	AckIds             []string `json:"ackIds,omitempty"`
}
