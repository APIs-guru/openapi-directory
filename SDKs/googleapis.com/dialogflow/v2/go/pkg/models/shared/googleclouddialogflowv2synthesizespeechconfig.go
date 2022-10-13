package shared

type GoogleCloudDialogflowV2SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                     `json:"effectsProfileId"`
	Pitch            *float64                                     `json:"pitch"`
	SpeakingRate     *float64                                     `json:"speakingRate"`
	Voice            *GoogleCloudDialogflowV2VoiceSelectionParams `json:"voice"`
	VolumeGainDb     *float64                                     `json:"volumeGainDb"`
}
