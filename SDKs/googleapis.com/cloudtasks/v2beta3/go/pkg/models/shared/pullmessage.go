package shared

// PullMessage
// Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.
type PullMessage struct {
	Payload *string `json:"payload,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}
