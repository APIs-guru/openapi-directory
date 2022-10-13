package shared

type QuotaInfo struct {
	LimitExceeded []string         `json:"limitExceeded"`
	QuotaConsumed map[string]int32 `json:"quotaConsumed"`
	QuotaMetrics  []MetricValueSet `json:"quotaMetrics"`
}
