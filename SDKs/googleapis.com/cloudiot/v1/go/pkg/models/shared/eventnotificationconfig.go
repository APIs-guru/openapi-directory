package shared

type EventNotificationConfig struct {
	PubsubTopicName  *string `json:"pubsubTopicName"`
	SubfolderMatches *string `json:"subfolderMatches"`
}
