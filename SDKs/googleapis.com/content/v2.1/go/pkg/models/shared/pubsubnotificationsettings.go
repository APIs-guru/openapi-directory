package shared

// PubsubNotificationSettings
// Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
type PubsubNotificationSettings struct {
	CloudTopicName   *string  `json:"cloudTopicName,omitempty"`
	Kind             *string  `json:"kind,omitempty"`
	RegisteredEvents []string `json:"registeredEvents,omitempty"`
}
