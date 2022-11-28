package shared

// HTTPRouteRetryPolicy
// The specifications for retries.
type HTTPRouteRetryPolicy struct {
	NumRetries      *int32   `json:"numRetries,omitempty"`
	PerTryTimeout   *string  `json:"perTryTimeout,omitempty"`
	RetryConditions []string `json:"retryConditions,omitempty"`
}
