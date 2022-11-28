package shared

// VideoFileDetailsAudioStream
// Information about an audio stream.
type VideoFileDetailsAudioStream struct {
	BitrateBps   *string `json:"bitrateBps,omitempty"`
	ChannelCount *int64  `json:"channelCount,omitempty"`
	Codec        *string `json:"codec,omitempty"`
	Vendor       *string `json:"vendor,omitempty"`
}
