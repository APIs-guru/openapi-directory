package shared

type ModifyAckDeadlineRequest struct {
	AckDeadlineSeconds *int32   `json:"ackDeadlineSeconds"`
	AckIds             []string `json:"ackIds"`
}
