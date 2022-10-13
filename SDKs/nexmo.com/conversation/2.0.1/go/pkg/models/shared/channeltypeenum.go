package shared

type ChannelTypeEnum string

const (
	ChannelTypeEnumApp       ChannelTypeEnum = "app"
	ChannelTypeEnumPhone     ChannelTypeEnum = "phone"
	ChannelTypeEnumSip       ChannelTypeEnum = "sip"
	ChannelTypeEnumWebsocket ChannelTypeEnum = "websocket"
	ChannelTypeEnumVbc       ChannelTypeEnum = "vbc"
)
