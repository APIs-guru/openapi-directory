package shared

type ValueDescriptorMetricKindEnum string

const (
	ValueDescriptorMetricKindEnumMetricKindUnspecified ValueDescriptorMetricKindEnum = "METRIC_KIND_UNSPECIFIED"
	ValueDescriptorMetricKindEnumGauge                 ValueDescriptorMetricKindEnum = "GAUGE"
	ValueDescriptorMetricKindEnumDelta                 ValueDescriptorMetricKindEnum = "DELTA"
	ValueDescriptorMetricKindEnumCumulative            ValueDescriptorMetricKindEnum = "CUMULATIVE"
)

type ValueDescriptorValueTypeEnum string

const (
	ValueDescriptorValueTypeEnumValueTypeUnspecified ValueDescriptorValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
	ValueDescriptorValueTypeEnumBool                 ValueDescriptorValueTypeEnum = "BOOL"
	ValueDescriptorValueTypeEnumInt64                ValueDescriptorValueTypeEnum = "INT64"
	ValueDescriptorValueTypeEnumDouble               ValueDescriptorValueTypeEnum = "DOUBLE"
	ValueDescriptorValueTypeEnumString               ValueDescriptorValueTypeEnum = "STRING"
	ValueDescriptorValueTypeEnumDistribution         ValueDescriptorValueTypeEnum = "DISTRIBUTION"
	ValueDescriptorValueTypeEnumMoney                ValueDescriptorValueTypeEnum = "MONEY"
)

type ValueDescriptor struct {
	Key        *string                        `json:"key"`
	MetricKind *ValueDescriptorMetricKindEnum `json:"metricKind"`
	Unit       *string                        `json:"unit"`
	ValueType  *ValueDescriptorValueTypeEnum  `json:"valueType"`
}
