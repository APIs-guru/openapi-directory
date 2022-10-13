package shared

type PubsubMessage struct {
	Attributes  map[string]string `json:"attributes"`
	Data        *string           `json:"data"`
	MessageID   *string           `json:"messageId"`
	PublishTime *string           `json:"publishTime"`
}
