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

type Channel struct {
	ChannelType *ChannelChannelTypeEnum `json:"channelType,omitempty"`
	Name        *string                 `json:"name,omitempty"`
}
