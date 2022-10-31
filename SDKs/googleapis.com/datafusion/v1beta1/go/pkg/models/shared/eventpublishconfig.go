package shared

type EventPublishConfig struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Topic   *string `json:"topic,omitempty"`
}
