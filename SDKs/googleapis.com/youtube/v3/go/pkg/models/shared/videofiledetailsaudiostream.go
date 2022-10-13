package shared

type VideoFileDetailsAudioStream struct {
	BitrateBps   *string `json:"bitrateBps"`
	ChannelCount *int64  `json:"channelCount"`
	Codec        *string `json:"codec"`
	Vendor       *string `json:"vendor"`
}
