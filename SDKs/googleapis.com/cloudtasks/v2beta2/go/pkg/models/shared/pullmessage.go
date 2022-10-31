package shared

type PullMessage struct {
	Payload *string `json:"payload,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}
