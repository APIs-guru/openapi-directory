package shared

// RetryConfig
// Retry config. These settings determine how a failed task attempt is retried.
type RetryConfig struct {
	MaxAttempts       *int32  `json:"maxAttempts,omitempty"`
	MaxBackoff        *string `json:"maxBackoff,omitempty"`
	MaxDoublings      *int32  `json:"maxDoublings,omitempty"`
	MaxRetryDuration  *string `json:"maxRetryDuration,omitempty"`
	MinBackoff        *string `json:"minBackoff,omitempty"`
	UnlimitedAttempts *bool   `json:"unlimitedAttempts,omitempty"`
}
