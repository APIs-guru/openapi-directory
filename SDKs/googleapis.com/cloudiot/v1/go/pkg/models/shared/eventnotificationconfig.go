package shared

// EventNotificationConfig
// The configuration for forwarding telemetry events.
type EventNotificationConfig struct {
	PubsubTopicName  *string `json:"pubsubTopicName,omitempty"`
	SubfolderMatches *string `json:"subfolderMatches,omitempty"`
}
