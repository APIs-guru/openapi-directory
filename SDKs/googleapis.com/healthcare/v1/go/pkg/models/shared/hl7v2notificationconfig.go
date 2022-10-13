package shared

type Hl7V2NotificationConfig struct {
	Filter      *string `json:"filter"`
	PubsubTopic *string `json:"pubsubTopic"`
}
