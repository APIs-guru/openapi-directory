package shared

// ChannelConversionPings
// The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
type ChannelConversionPings struct {
	Pings []ChannelConversionPing `json:"pings,omitempty"`
}
