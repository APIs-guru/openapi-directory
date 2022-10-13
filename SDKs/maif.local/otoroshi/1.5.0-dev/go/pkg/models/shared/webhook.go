package shared

type Webhook struct {
	Headers map[string]string `json:"headers"`
	URL     string            `json:"url"`
}
