package shared

// RetryConfig
// Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
type RetryConfig struct {
	MaxBackoffDuration *string `json:"maxBackoffDuration,omitempty"`
	MaxDoublings       *int32  `json:"maxDoublings,omitempty"`
	MaxRetryDuration   *string `json:"maxRetryDuration,omitempty"`
	MinBackoffDuration *string `json:"minBackoffDuration,omitempty"`
	RetryCount         *int32  `json:"retryCount,omitempty"`
}
