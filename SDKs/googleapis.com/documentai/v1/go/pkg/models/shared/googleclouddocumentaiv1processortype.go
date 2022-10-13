package shared

type GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum string

const (
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumLaunchStageUnspecified GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumUnimplemented          GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumPrelaunch              GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "PRELAUNCH"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumEarlyAccess            GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumAlpha                  GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "ALPHA"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumBeta                   GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "BETA"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumGa                     GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "GA"
	GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnumDeprecated             GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudDocumentaiV1ProcessorType struct {
	AllowCreation      *bool                                                `json:"allowCreation"`
	AvailableLocations []GoogleCloudDocumentaiV1ProcessorTypeLocationInfo   `json:"availableLocations"`
	Category           *string                                              `json:"category"`
	LaunchStage        *GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum `json:"launchStage"`
	Name               *string                                              `json:"name"`
	Type               *string                                              `json:"type"`
}
