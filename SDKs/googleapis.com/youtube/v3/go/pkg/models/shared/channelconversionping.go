package shared

type ChannelConversionPingContextEnum string

const (
	ChannelConversionPingContextEnumSubscribe   ChannelConversionPingContextEnum = "subscribe"
	ChannelConversionPingContextEnumUnsubscribe ChannelConversionPingContextEnum = "unsubscribe"
	ChannelConversionPingContextEnumCview       ChannelConversionPingContextEnum = "cview"
)

// ChannelConversionPing
// Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
type ChannelConversionPing struct {
	Context       *ChannelConversionPingContextEnum `json:"context,omitempty"`
	ConversionURL *string                           `json:"conversionUrl,omitempty"`
}
