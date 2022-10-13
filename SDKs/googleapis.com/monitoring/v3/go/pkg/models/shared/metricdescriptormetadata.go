package shared

type MetricDescriptorMetadataLaunchStageEnum string

const (
	MetricDescriptorMetadataLaunchStageEnumLaunchStageUnspecified MetricDescriptorMetadataLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	MetricDescriptorMetadataLaunchStageEnumUnimplemented          MetricDescriptorMetadataLaunchStageEnum = "UNIMPLEMENTED"
	MetricDescriptorMetadataLaunchStageEnumPrelaunch              MetricDescriptorMetadataLaunchStageEnum = "PRELAUNCH"
	MetricDescriptorMetadataLaunchStageEnumEarlyAccess            MetricDescriptorMetadataLaunchStageEnum = "EARLY_ACCESS"
	MetricDescriptorMetadataLaunchStageEnumAlpha                  MetricDescriptorMetadataLaunchStageEnum = "ALPHA"
	MetricDescriptorMetadataLaunchStageEnumBeta                   MetricDescriptorMetadataLaunchStageEnum = "BETA"
	MetricDescriptorMetadataLaunchStageEnumGa                     MetricDescriptorMetadataLaunchStageEnum = "GA"
	MetricDescriptorMetadataLaunchStageEnumDeprecated             MetricDescriptorMetadataLaunchStageEnum = "DEPRECATED"
)

type MetricDescriptorMetadata struct {
	IngestDelay  *string                                  `json:"ingestDelay"`
	LaunchStage  *MetricDescriptorMetadataLaunchStageEnum `json:"launchStage"`
	SamplePeriod *string                                  `json:"samplePeriod"`
}
