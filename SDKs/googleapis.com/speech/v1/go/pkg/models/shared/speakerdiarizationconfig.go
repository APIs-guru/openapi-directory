package shared

type SpeakerDiarizationConfig struct {
	EnableSpeakerDiarization *bool  `json:"enableSpeakerDiarization"`
	MaxSpeakerCount          *int32 `json:"maxSpeakerCount"`
	MinSpeakerCount          *int32 `json:"minSpeakerCount"`
	SpeakerTag               *int32 `json:"speakerTag"`
}
