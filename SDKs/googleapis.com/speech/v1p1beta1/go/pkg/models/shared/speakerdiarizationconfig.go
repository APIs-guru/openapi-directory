package shared

// SpeakerDiarizationConfigInput
// Config to enable speaker diarization.
type SpeakerDiarizationConfigInput struct {
	EnableSpeakerDiarization *bool  `json:"enableSpeakerDiarization,omitempty"`
	MaxSpeakerCount          *int32 `json:"maxSpeakerCount,omitempty"`
	MinSpeakerCount          *int32 `json:"minSpeakerCount,omitempty"`
}
