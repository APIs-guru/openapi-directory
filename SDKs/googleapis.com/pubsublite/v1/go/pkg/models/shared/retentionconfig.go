package shared

// RetentionConfig
// The settings for a topic's message retention.
type RetentionConfig struct {
	PerPartitionBytes *string `json:"perPartitionBytes,omitempty"`
	Period            *string `json:"period,omitempty"`
}
