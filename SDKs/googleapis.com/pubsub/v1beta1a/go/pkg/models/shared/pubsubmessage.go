package shared

type PubsubMessage struct {
	Data        *string `json:"data"`
	Label       []Label `json:"label"`
	MessageID   *string `json:"messageId"`
	PublishTime *string `json:"publishTime"`
}
