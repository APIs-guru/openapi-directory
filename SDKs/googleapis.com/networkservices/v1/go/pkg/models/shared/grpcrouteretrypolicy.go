package shared

type GrpcRouteRetryPolicy struct {
	NumRetries      *int64   `json:"numRetries,omitempty"`
	RetryConditions []string `json:"retryConditions,omitempty"`
}
