package shared

// AudioStream
// Audio stream resource.
type AudioStream struct {
	BitrateBps      *int32         `json:"bitrateBps,omitempty"`
	ChannelCount    *int32         `json:"channelCount,omitempty"`
	ChannelLayout   []string       `json:"channelLayout,omitempty"`
	Codec           *string        `json:"codec,omitempty"`
	Mapping         []AudioMapping `json:"mapping,omitempty"`
	SampleRateHertz *int32         `json:"sampleRateHertz,omitempty"`
}
