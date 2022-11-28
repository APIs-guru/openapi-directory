package shared

// NotificationConfig
// NotificationConfig is the configuration of notifications.
type NotificationConfig struct {
	Pubsub *PubSub `json:"pubsub,omitempty"`
}
