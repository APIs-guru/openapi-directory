package shared

type ConsumerQuotaMetric struct {
	ConsumerQuotaLimits           []ConsumerQuotaLimit `json:"consumerQuotaLimits"`
	DescendantConsumerQuotaLimits []ConsumerQuotaLimit `json:"descendantConsumerQuotaLimits"`
	DisplayName                   *string              `json:"displayName"`
	Metric                        *string              `json:"metric"`
	Name                          *string              `json:"name"`
	Unit                          *string              `json:"unit"`
}
