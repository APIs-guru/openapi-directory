package shared

type GrpcRouteRetryPolicy struct {
	NumRetries      *int64   `json:"numRetries"`
	RetryConditions []string `json:"retryConditions"`
}
