package shared

type RetryConfig struct {
	MaxAttempts      *int32  `json:"maxAttempts"`
	MaxBackoff       *string `json:"maxBackoff"`
	MaxDoublings     *int32  `json:"maxDoublings"`
	MaxRetryDuration *string `json:"maxRetryDuration"`
	MinBackoff       *string `json:"minBackoff"`
}
