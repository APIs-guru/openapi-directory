package shared

type ConsumerQuotaMetric struct {
	ConsumerQuotaLimits           []ConsumerQuotaLimit `json:"consumerQuotaLimits,omitempty"`
	DescendantConsumerQuotaLimits []ConsumerQuotaLimit `json:"descendantConsumerQuotaLimits,omitempty"`
	DisplayName                   *string              `json:"displayName,omitempty"`
	Metric                        *string              `json:"metric,omitempty"`
	Name                          *string              `json:"name,omitempty"`
	Unit                          *string              `json:"unit,omitempty"`
}
