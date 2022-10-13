package shared

type RetryConfig struct {
	MaxBackoffDuration *string `json:"maxBackoffDuration"`
	MaxDoublings       *int32  `json:"maxDoublings"`
	MaxRetryDuration   *string `json:"maxRetryDuration"`
	MinBackoffDuration *string `json:"minBackoffDuration"`
	RetryCount         *int32  `json:"retryCount"`
}
