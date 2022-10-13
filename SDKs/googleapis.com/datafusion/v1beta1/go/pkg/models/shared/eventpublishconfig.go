package shared

type EventPublishConfig struct {
	Enabled *bool   `json:"enabled"`
	Topic   *string `json:"topic"`
}
