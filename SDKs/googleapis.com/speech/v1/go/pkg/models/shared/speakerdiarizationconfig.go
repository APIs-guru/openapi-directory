package shared

type SpeakerDiarizationConfig struct {
	EnableSpeakerDiarization *bool  `json:"enableSpeakerDiarization,omitempty"`
	MaxSpeakerCount          *int32 `json:"maxSpeakerCount,omitempty"`
	MinSpeakerCount          *int32 `json:"minSpeakerCount,omitempty"`
	SpeakerTag               *int32 `json:"speakerTag,omitempty"`
}
