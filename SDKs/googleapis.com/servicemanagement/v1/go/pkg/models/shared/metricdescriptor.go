package shared

type MetricDescriptorLaunchStageEnum string

const (
	MetricDescriptorLaunchStageEnumLaunchStageUnspecified MetricDescriptorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	MetricDescriptorLaunchStageEnumUnimplemented          MetricDescriptorLaunchStageEnum = "UNIMPLEMENTED"
	MetricDescriptorLaunchStageEnumPrelaunch              MetricDescriptorLaunchStageEnum = "PRELAUNCH"
	MetricDescriptorLaunchStageEnumEarlyAccess            MetricDescriptorLaunchStageEnum = "EARLY_ACCESS"
	MetricDescriptorLaunchStageEnumAlpha                  MetricDescriptorLaunchStageEnum = "ALPHA"
	MetricDescriptorLaunchStageEnumBeta                   MetricDescriptorLaunchStageEnum = "BETA"
	MetricDescriptorLaunchStageEnumGa                     MetricDescriptorLaunchStageEnum = "GA"
	MetricDescriptorLaunchStageEnumDeprecated             MetricDescriptorLaunchStageEnum = "DEPRECATED"
)

type MetricDescriptorMetricKindEnum string

const (
	MetricDescriptorMetricKindEnumMetricKindUnspecified MetricDescriptorMetricKindEnum = "METRIC_KIND_UNSPECIFIED"
	MetricDescriptorMetricKindEnumGauge                 MetricDescriptorMetricKindEnum = "GAUGE"
	MetricDescriptorMetricKindEnumDelta                 MetricDescriptorMetricKindEnum = "DELTA"
	MetricDescriptorMetricKindEnumCumulative            MetricDescriptorMetricKindEnum = "CUMULATIVE"
)

type MetricDescriptorValueTypeEnum string

const (
	MetricDescriptorValueTypeEnumValueTypeUnspecified MetricDescriptorValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
	MetricDescriptorValueTypeEnumBool                 MetricDescriptorValueTypeEnum = "BOOL"
	MetricDescriptorValueTypeEnumInt64                MetricDescriptorValueTypeEnum = "INT64"
	MetricDescriptorValueTypeEnumDouble               MetricDescriptorValueTypeEnum = "DOUBLE"
	MetricDescriptorValueTypeEnumString               MetricDescriptorValueTypeEnum = "STRING"
	MetricDescriptorValueTypeEnumDistribution         MetricDescriptorValueTypeEnum = "DISTRIBUTION"
	MetricDescriptorValueTypeEnumMoney                MetricDescriptorValueTypeEnum = "MONEY"
)

type MetricDescriptor struct {
	Description            *string                          `json:"description,omitempty"`
	DisplayName            *string                          `json:"displayName,omitempty"`
	Labels                 []LabelDescriptor                `json:"labels,omitempty"`
	LaunchStage            *MetricDescriptorLaunchStageEnum `json:"launchStage,omitempty"`
	Metadata               *MetricDescriptorMetadata        `json:"metadata,omitempty"`
	MetricKind             *MetricDescriptorMetricKindEnum  `json:"metricKind,omitempty"`
	MonitoredResourceTypes []string                         `json:"monitoredResourceTypes,omitempty"`
	Name                   *string                          `json:"name,omitempty"`
	Type                   *string                          `json:"type,omitempty"`
	Unit                   *string                          `json:"unit,omitempty"`
	ValueType              *MetricDescriptorValueTypeEnum   `json:"valueType,omitempty"`
}
