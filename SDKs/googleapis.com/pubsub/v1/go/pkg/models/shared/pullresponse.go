package shared

type PullResponse struct {
	ReceivedMessages []ReceivedMessage `json:"receivedMessages"`
}
