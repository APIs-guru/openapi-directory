package shared

type HTTPRouteRetryPolicy struct {
	NumRetries      *int32   `json:"numRetries"`
	PerTryTimeout   *string  `json:"perTryTimeout"`
	RetryConditions []string `json:"retryConditions"`
}
