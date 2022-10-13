package shared

type PullResponse struct {
	AckID       *string      `json:"ackId"`
	PubsubEvent *PubsubEvent `json:"pubsubEvent"`
}
