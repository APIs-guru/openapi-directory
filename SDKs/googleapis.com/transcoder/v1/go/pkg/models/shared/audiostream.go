package shared

type AudioStream struct {
	BitrateBps      *int32         `json:"bitrateBps"`
	ChannelCount    *int32         `json:"channelCount"`
	ChannelLayout   []string       `json:"channelLayout"`
	Codec           *string        `json:"codec"`
	Mapping         []AudioMapping `json:"mapping"`
	SampleRateHertz *int32         `json:"sampleRateHertz"`
}
