package shared

type NotificationChannelDescriptorLaunchStageEnum string

const (
	NotificationChannelDescriptorLaunchStageEnumLaunchStageUnspecified NotificationChannelDescriptorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	NotificationChannelDescriptorLaunchStageEnumUnimplemented          NotificationChannelDescriptorLaunchStageEnum = "UNIMPLEMENTED"
	NotificationChannelDescriptorLaunchStageEnumPrelaunch              NotificationChannelDescriptorLaunchStageEnum = "PRELAUNCH"
	NotificationChannelDescriptorLaunchStageEnumEarlyAccess            NotificationChannelDescriptorLaunchStageEnum = "EARLY_ACCESS"
	NotificationChannelDescriptorLaunchStageEnumAlpha                  NotificationChannelDescriptorLaunchStageEnum = "ALPHA"
	NotificationChannelDescriptorLaunchStageEnumBeta                   NotificationChannelDescriptorLaunchStageEnum = "BETA"
	NotificationChannelDescriptorLaunchStageEnumGa                     NotificationChannelDescriptorLaunchStageEnum = "GA"
	NotificationChannelDescriptorLaunchStageEnumDeprecated             NotificationChannelDescriptorLaunchStageEnum = "DEPRECATED"
)

type NotificationChannelDescriptorSupportedTiersEnum string

const (
	NotificationChannelDescriptorSupportedTiersEnumServiceTierUnspecified NotificationChannelDescriptorSupportedTiersEnum = "SERVICE_TIER_UNSPECIFIED"
	NotificationChannelDescriptorSupportedTiersEnumServiceTierBasic       NotificationChannelDescriptorSupportedTiersEnum = "SERVICE_TIER_BASIC"
	NotificationChannelDescriptorSupportedTiersEnumServiceTierPremium     NotificationChannelDescriptorSupportedTiersEnum = "SERVICE_TIER_PREMIUM"
)

type NotificationChannelDescriptor struct {
	Description    *string                                           `json:"description"`
	DisplayName    *string                                           `json:"displayName"`
	Labels         []LabelDescriptor                                 `json:"labels"`
	LaunchStage    *NotificationChannelDescriptorLaunchStageEnum     `json:"launchStage"`
	Name           *string                                           `json:"name"`
	SupportedTiers []NotificationChannelDescriptorSupportedTiersEnum `json:"supportedTiers"`
	Type           *string                                           `json:"type"`
}
