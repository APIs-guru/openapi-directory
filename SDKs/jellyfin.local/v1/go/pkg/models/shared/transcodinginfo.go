package shared

type TranscodingInfo struct {
	AudioChannels        *int32                `json:"AudioChannels"`
	AudioCodec           *string               `json:"AudioCodec"`
	Bitrate              *int32                `json:"Bitrate"`
	CompletionPercentage *float64              `json:"CompletionPercentage"`
	Container            *string               `json:"Container"`
	Framerate            *float32              `json:"Framerate"`
	Height               *int32                `json:"Height"`
	IsAudioDirect        *bool                 `json:"IsAudioDirect"`
	IsVideoDirect        *bool                 `json:"IsVideoDirect"`
	TranscodeReasons     []TranscodeReasonEnum `json:"TranscodeReasons"`
	VideoCodec           *string               `json:"VideoCodec"`
	Width                *int32                `json:"Width"`
}
