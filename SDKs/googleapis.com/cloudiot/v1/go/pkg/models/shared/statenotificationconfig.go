package shared

// StateNotificationConfig
// The configuration for notification of new states received from the device.
type StateNotificationConfig struct {
	PubsubTopicName *string `json:"pubsubTopicName,omitempty"`
}
