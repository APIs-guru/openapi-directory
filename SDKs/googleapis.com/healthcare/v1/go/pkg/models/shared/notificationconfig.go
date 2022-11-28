package shared

// NotificationConfig
// Specifies where to send notifications upon changes to a data store.
type NotificationConfig struct {
	PubsubTopic *string `json:"pubsubTopic,omitempty"`
}
