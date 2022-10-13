package shared

type PullMessage struct {
	Payload *string `json:"payload"`
	Tag     *string `json:"tag"`
}
