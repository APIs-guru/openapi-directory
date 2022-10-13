package shared

type GoogleCloudDialogflowCxV3SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                       `json:"effectsProfileId"`
	Pitch            *float64                                       `json:"pitch"`
	SpeakingRate     *float64                                       `json:"speakingRate"`
	Voice            *GoogleCloudDialogflowCxV3VoiceSelectionParams `json:"voice"`
	VolumeGainDb     *float64                                       `json:"volumeGainDb"`
}
