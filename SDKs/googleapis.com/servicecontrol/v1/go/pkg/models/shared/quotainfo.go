package shared

// QuotaInfo
// Contains the quota information for a quota check response.
type QuotaInfo struct {
	LimitExceeded []string         `json:"limitExceeded,omitempty"`
	QuotaConsumed map[string]int32 `json:"quotaConsumed,omitempty"`
	QuotaMetrics  []MetricValueSet `json:"quotaMetrics,omitempty"`
}
