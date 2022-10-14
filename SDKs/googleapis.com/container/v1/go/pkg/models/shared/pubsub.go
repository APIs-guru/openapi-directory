package shared

type PubSub struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Filter  *Filter `json:"filter,omitempty"`
	Topic   *string `json:"topic,omitempty"`
}
