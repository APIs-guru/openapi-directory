package shared

// PullResponse
// Response for the `Pull` method.
type PullResponse struct {
	ReceivedMessages []ReceivedMessage `json:"receivedMessages,omitempty"`
}
