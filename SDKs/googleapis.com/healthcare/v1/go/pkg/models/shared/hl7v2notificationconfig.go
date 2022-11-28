package shared

// Hl7V2NotificationConfig
// Specifies where and whether to send notifications upon changes to a data store.
type Hl7V2NotificationConfig struct {
	Filter      *string `json:"filter,omitempty"`
	PubsubTopic *string `json:"pubsubTopic,omitempty"`
}
