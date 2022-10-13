package shared

type PubSub struct {
	Enabled *bool   `json:"enabled"`
	Filter  *Filter `json:"filter"`
	Topic   *string `json:"topic"`
}
