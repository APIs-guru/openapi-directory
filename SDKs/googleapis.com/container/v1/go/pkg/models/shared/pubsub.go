package shared

// PubSub
// Pub/Sub specific notification config.
type PubSub struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Filter  *Filter `json:"filter,omitempty"`
	Topic   *string `json:"topic,omitempty"`
}
