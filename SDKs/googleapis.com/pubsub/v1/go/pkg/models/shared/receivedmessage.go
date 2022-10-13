package shared

type ReceivedMessage struct {
	AckID           *string        `json:"ackId"`
	DeliveryAttempt *int32         `json:"deliveryAttempt"`
	Message         *PubsubMessage `json:"message"`
}
