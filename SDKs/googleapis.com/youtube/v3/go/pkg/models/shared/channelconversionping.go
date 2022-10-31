package shared

type ChannelConversionPingContextEnum string

const (
	ChannelConversionPingContextEnumSubscribe   ChannelConversionPingContextEnum = "subscribe"
	ChannelConversionPingContextEnumUnsubscribe ChannelConversionPingContextEnum = "unsubscribe"
	ChannelConversionPingContextEnumCview       ChannelConversionPingContextEnum = "cview"
)

type ChannelConversionPing struct {
	Context       *ChannelConversionPingContextEnum `json:"context,omitempty"`
	ConversionURL *string                           `json:"conversionUrl,omitempty"`
}
