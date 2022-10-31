package shared

type TranscodingInfo struct {
	AudioChannels        *int32                `json:"AudioChannels,omitempty"`
	AudioCodec           *string               `json:"AudioCodec,omitempty"`
	Bitrate              *int32                `json:"Bitrate,omitempty"`
	CompletionPercentage *float64              `json:"CompletionPercentage,omitempty"`
	Container            *string               `json:"Container,omitempty"`
	Framerate            *float32              `json:"Framerate,omitempty"`
	Height               *int32                `json:"Height,omitempty"`
	IsAudioDirect        *bool                 `json:"IsAudioDirect,omitempty"`
	IsVideoDirect        *bool                 `json:"IsVideoDirect,omitempty"`
	TranscodeReasons     []TranscodeReasonEnum `json:"TranscodeReasons,omitempty"`
	VideoCodec           *string               `json:"VideoCodec,omitempty"`
	Width                *int32                `json:"Width,omitempty"`
}
