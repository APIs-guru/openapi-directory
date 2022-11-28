package shared

type TimeSeriesMetricKindEnum string

const (
	TimeSeriesMetricKindEnumMetricKindUnspecified TimeSeriesMetricKindEnum = "METRIC_KIND_UNSPECIFIED"
	TimeSeriesMetricKindEnumGauge                 TimeSeriesMetricKindEnum = "GAUGE"
	TimeSeriesMetricKindEnumDelta                 TimeSeriesMetricKindEnum = "DELTA"
	TimeSeriesMetricKindEnumCumulative            TimeSeriesMetricKindEnum = "CUMULATIVE"
)

type TimeSeriesValueTypeEnum string

const (
	TimeSeriesValueTypeEnumValueTypeUnspecified TimeSeriesValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
	TimeSeriesValueTypeEnumBool                 TimeSeriesValueTypeEnum = "BOOL"
	TimeSeriesValueTypeEnumInt64                TimeSeriesValueTypeEnum = "INT64"
	TimeSeriesValueTypeEnumDouble               TimeSeriesValueTypeEnum = "DOUBLE"
	TimeSeriesValueTypeEnumString               TimeSeriesValueTypeEnum = "STRING"
	TimeSeriesValueTypeEnumDistribution         TimeSeriesValueTypeEnum = "DISTRIBUTION"
	TimeSeriesValueTypeEnumMoney                TimeSeriesValueTypeEnum = "MONEY"
)

// TimeSeries
// A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
type TimeSeries struct {
	Metadata   *MonitoredResourceMetadata `json:"metadata,omitempty"`
	Metric     *Metric                    `json:"metric,omitempty"`
	MetricKind *TimeSeriesMetricKindEnum  `json:"metricKind,omitempty"`
	Points     []Point                    `json:"points,omitempty"`
	Resource   *MonitoredResource         `json:"resource,omitempty"`
	Unit       *string                    `json:"unit,omitempty"`
	ValueType  *TimeSeriesValueTypeEnum   `json:"valueType,omitempty"`
}
