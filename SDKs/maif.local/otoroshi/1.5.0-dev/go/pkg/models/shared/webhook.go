package shared

// Webhook
// A callback URL where events are posted
type Webhook struct {
	Headers map[string]string `json:"headers"`
	URL     string            `json:"url"`
}
