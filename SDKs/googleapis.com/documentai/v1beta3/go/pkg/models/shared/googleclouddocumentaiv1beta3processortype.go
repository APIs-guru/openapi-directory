package shared

type GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum string

const (
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumLaunchStageUnspecified GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumUnimplemented          GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumPrelaunch              GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "PRELAUNCH"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumEarlyAccess            GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumAlpha                  GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "ALPHA"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumBeta                   GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "BETA"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumGa                     GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "GA"
	GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnumDeprecated             GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudDocumentaiV1beta3ProcessorType struct {
	AllowCreation      *bool                                                     `json:"allowCreation,omitempty"`
	AvailableLocations []GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo   `json:"availableLocations,omitempty"`
	Category           *string                                                   `json:"category,omitempty"`
	LaunchStage        *GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum `json:"launchStage,omitempty"`
	Name               *string                                                   `json:"name,omitempty"`
	Type               *string                                                   `json:"type,omitempty"`
}
