package shared

type GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                            `json:"effectsProfileId"`
	Pitch            *float64                                            `json:"pitch"`
	SpeakingRate     *float64                                            `json:"speakingRate"`
	Voice            *GoogleCloudDialogflowCxV3beta1VoiceSelectionParams `json:"voice"`
	VolumeGainDb     *float64                                            `json:"volumeGainDb"`
}
