package shared

type PubsubNotificationSettings struct {
	CloudTopicName   *string  `json:"cloudTopicName"`
	Kind             *string  `json:"kind"`
	RegisteredEvents []string `json:"registeredEvents"`
}
