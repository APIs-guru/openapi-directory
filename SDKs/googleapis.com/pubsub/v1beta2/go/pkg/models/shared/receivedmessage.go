package shared

type ReceivedMessage struct {
	AckID   *string        `json:"ackId"`
	Message *PubsubMessage `json:"message"`
}
