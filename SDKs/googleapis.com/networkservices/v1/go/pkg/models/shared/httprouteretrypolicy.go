package shared



type HTTPRouteRetryPolicy struct {
    NumRetries *int32 `json:"numRetries,omitempty"`
    PerTryTimeout *string `json:"perTryTimeout,omitempty"`
    RetryConditions []string `json:"retryConditions,omitempty"`
    
}

