package shared

type ChannelChannelTypeEnum string

const (
	ChannelChannelTypeEnumChannelTypeUnspecified ChannelChannelTypeEnum = "CHANNEL_TYPE_UNSPECIFIED"
	ChannelChannelTypeEnumStable                 ChannelChannelTypeEnum = "STABLE"
	ChannelChannelTypeEnumBeta                   ChannelChannelTypeEnum = "BETA"
	ChannelChannelTypeEnumDev                    ChannelChannelTypeEnum = "DEV"
	ChannelChannelTypeEnumCanary                 ChannelChannelTypeEnum = "CANARY"
	ChannelChannelTypeEnumCanaryAsan             ChannelChannelTypeEnum = "CANARY_ASAN"
	ChannelChannelTypeEnumAll                    ChannelChannelTypeEnum = "ALL"
	ChannelChannelTypeEnumExtended               ChannelChannelTypeEnum = "EXTENDED"
)

// Channel
// Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
type Channel struct {
	ChannelType *ChannelChannelTypeEnum `json:"channelType,omitempty"`
	Name        *string                 `json:"name,omitempty"`
}
