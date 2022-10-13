package shared

type BusinessCallsInsightsMetricTypeEnum string

const (
	BusinessCallsInsightsMetricTypeEnumMetricTypeUnspecified BusinessCallsInsightsMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	BusinessCallsInsightsMetricTypeEnumAggregateCount        BusinessCallsInsightsMetricTypeEnum = "AGGREGATE_COUNT"
)

type BusinessCallsInsights struct {
	AggregateMetrics *AggregateMetrics                    `json:"aggregateMetrics"`
	MetricType       *BusinessCallsInsightsMetricTypeEnum `json:"metricType"`
	Name             *string                              `json:"name"`
}
