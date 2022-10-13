package shared

type GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                          `json:"effectsProfileId"`
	Pitch            *float64                                          `json:"pitch"`
	SpeakingRate     *float64                                          `json:"speakingRate"`
	Voice            *GoogleCloudDialogflowV2beta1VoiceSelectionParams `json:"voice"`
	VolumeGainDb     *float64                                          `json:"volumeGainDb"`
}
