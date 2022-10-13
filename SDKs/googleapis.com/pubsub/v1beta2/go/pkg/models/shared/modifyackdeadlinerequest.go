package shared

type ModifyAckDeadlineRequest struct {
	AckDeadlineSeconds *int32   `json:"ackDeadlineSeconds"`
	AckID              *string  `json:"ackId"`
	AckIds             []string `json:"ackIds"`
}
