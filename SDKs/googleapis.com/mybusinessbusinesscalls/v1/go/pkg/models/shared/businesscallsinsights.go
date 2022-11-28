package shared

type BusinessCallsInsightsMetricTypeEnum string

const (
	BusinessCallsInsightsMetricTypeEnumMetricTypeUnspecified BusinessCallsInsightsMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	BusinessCallsInsightsMetricTypeEnumAggregateCount        BusinessCallsInsightsMetricTypeEnum = "AGGREGATE_COUNT"
)

// BusinessCallsInsights
// Insights for calls made to a location.
type BusinessCallsInsights struct {
	AggregateMetrics *AggregateMetrics                    `json:"aggregateMetrics,omitempty"`
	MetricType       *BusinessCallsInsightsMetricTypeEnum `json:"metricType,omitempty"`
	Name             *string                              `json:"name,omitempty"`
}
