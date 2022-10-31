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
	Description    *string                                           `json:"description,omitempty"`
	DisplayName    *string                                           `json:"displayName,omitempty"`
	Labels         []LabelDescriptor                                 `json:"labels,omitempty"`
	LaunchStage    *NotificationChannelDescriptorLaunchStageEnum     `json:"launchStage,omitempty"`
	Name           *string                                           `json:"name,omitempty"`
	SupportedTiers []NotificationChannelDescriptorSupportedTiersEnum `json:"supportedTiers,omitempty"`
	Type           *string                                           `json:"type,omitempty"`
}
