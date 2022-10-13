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

type TimeSeries struct {
	Metadata   *MonitoredResourceMetadata `json:"metadata"`
	Metric     *Metric                    `json:"metric"`
	MetricKind *TimeSeriesMetricKindEnum  `json:"metricKind"`
	Points     []Point                    `json:"points"`
	Resource   *MonitoredResource         `json:"resource"`
	Unit       *string                    `json:"unit"`
	ValueType  *TimeSeriesValueTypeEnum   `json:"valueType"`
}
