package shared

// GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig
// Configuration of how speech should be synthesized.
type GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                            `json:"effectsProfileId,omitempty"`
	Pitch            *float64                                            `json:"pitch,omitempty"`
	SpeakingRate     *float64                                            `json:"speakingRate,omitempty"`
	Voice            *GoogleCloudDialogflowCxV3beta1VoiceSelectionParams `json:"voice,omitempty"`
	VolumeGainDb     *float64                                            `json:"volumeGainDb,omitempty"`
}
