package shared

type DimensionalMetricValueMetricOptionEnum string

const (
	DimensionalMetricValueMetricOptionEnumMetricOptionUnspecified DimensionalMetricValueMetricOptionEnum = "METRIC_OPTION_UNSPECIFIED"
	DimensionalMetricValueMetricOptionEnumAggregatedTotal         DimensionalMetricValueMetricOptionEnum = "AGGREGATED_TOTAL"
	DimensionalMetricValueMetricOptionEnumAggregatedDaily         DimensionalMetricValueMetricOptionEnum = "AGGREGATED_DAILY"
	DimensionalMetricValueMetricOptionEnumBreakdownDayOfWeek      DimensionalMetricValueMetricOptionEnum = "BREAKDOWN_DAY_OF_WEEK"
	DimensionalMetricValueMetricOptionEnumBreakdownHourOfDay      DimensionalMetricValueMetricOptionEnum = "BREAKDOWN_HOUR_OF_DAY"
)

// DimensionalMetricValue
// A value for a single metric with a given time dimension.
type DimensionalMetricValue struct {
	MetricOption  *DimensionalMetricValueMetricOptionEnum `json:"metricOption,omitempty"`
	TimeDimension *TimeDimension                          `json:"timeDimension,omitempty"`
	Value         *string                                 `json:"value,omitempty"`
}
