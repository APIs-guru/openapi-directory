package shared

type RetryConfig struct {
	MaxBackoffDuration *string `json:"maxBackoffDuration,omitempty"`
	MaxDoublings       *int32  `json:"maxDoublings,omitempty"`
	MaxRetryDuration   *string `json:"maxRetryDuration,omitempty"`
	MinBackoffDuration *string `json:"minBackoffDuration,omitempty"`
	RetryCount         *int32  `json:"retryCount,omitempty"`
}
