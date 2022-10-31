package shared




type ValueDescriptorMetricKindEnum string

const (
    ValueDescriptorMetricKindEnumMetricKindUnspecified ValueDescriptorMetricKindEnum = "METRIC_KIND_UNSPECIFIED"
ValueDescriptorMetricKindEnumGauge ValueDescriptorMetricKindEnum = "GAUGE"
ValueDescriptorMetricKindEnumDelta ValueDescriptorMetricKindEnum = "DELTA"
ValueDescriptorMetricKindEnumCumulative ValueDescriptorMetricKindEnum = "CUMULATIVE"
)



type ValueDescriptorValueTypeEnum string

const (
    ValueDescriptorValueTypeEnumValueTypeUnspecified ValueDescriptorValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
ValueDescriptorValueTypeEnumBool ValueDescriptorValueTypeEnum = "BOOL"
ValueDescriptorValueTypeEnumInt64 ValueDescriptorValueTypeEnum = "INT64"
ValueDescriptorValueTypeEnumDouble ValueDescriptorValueTypeEnum = "DOUBLE"
ValueDescriptorValueTypeEnumString ValueDescriptorValueTypeEnum = "STRING"
ValueDescriptorValueTypeEnumDistribution ValueDescriptorValueTypeEnum = "DISTRIBUTION"
ValueDescriptorValueTypeEnumMoney ValueDescriptorValueTypeEnum = "MONEY"
)


type ValueDescriptor struct {
    Key *string `json:"key,omitempty"`
    MetricKind *ValueDescriptorMetricKindEnum `json:"metricKind,omitempty"`
    Unit *string `json:"unit,omitempty"`
    ValueType *ValueDescriptorValueTypeEnum `json:"valueType,omitempty"`
    
}

