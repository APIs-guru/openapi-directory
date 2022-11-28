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

// GoogleCloudDocumentaiV1ProcessorType
// A processor type is responsible for performing a certain document understanding task on a certain type of document.
type GoogleCloudDocumentaiV1ProcessorType struct {
	AllowCreation      *bool                                                `json:"allowCreation,omitempty"`
	AvailableLocations []GoogleCloudDocumentaiV1ProcessorTypeLocationInfo   `json:"availableLocations,omitempty"`
	Category           *string                                              `json:"category,omitempty"`
	LaunchStage        *GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum `json:"launchStage,omitempty"`
	Name               *string                                              `json:"name,omitempty"`
	Type               *string                                              `json:"type,omitempty"`
}
