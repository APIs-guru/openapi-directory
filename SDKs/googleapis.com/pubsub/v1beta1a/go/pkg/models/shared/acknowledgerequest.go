package shared

type AcknowledgeRequest struct {
	AckID        []string `json:"ackId"`
	Subscription *string  `json:"subscription"`
}
