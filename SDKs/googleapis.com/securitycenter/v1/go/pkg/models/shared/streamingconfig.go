package shared

// StreamingConfig
// The config for streaming-based notifications, which send each event as soon as it is detected.
type StreamingConfig struct {
	Filter *string `json:"filter,omitempty"`
}
