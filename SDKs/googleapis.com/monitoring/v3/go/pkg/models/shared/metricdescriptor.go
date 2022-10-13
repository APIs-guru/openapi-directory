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
	Description            *string                          `json:"description"`
	DisplayName            *string                          `json:"displayName"`
	Labels                 []LabelDescriptor                `json:"labels"`
	LaunchStage            *MetricDescriptorLaunchStageEnum `json:"launchStage"`
	Metadata               *MetricDescriptorMetadata        `json:"metadata"`
	MetricKind             *MetricDescriptorMetricKindEnum  `json:"metricKind"`
	MonitoredResourceTypes []string                         `json:"monitoredResourceTypes"`
	Name                   *string                          `json:"name"`
	Type                   *string                          `json:"type"`
	Unit                   *string                          `json:"unit"`
	ValueType              *MetricDescriptorValueTypeEnum   `json:"valueType"`
}
