package shared

type PubsubTarget struct {
	Attributes map[string]string `json:"attributes"`
	Data       *string           `json:"data"`
	TopicName  *string           `json:"topicName"`
}
