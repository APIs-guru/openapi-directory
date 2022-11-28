package shared

// GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig
// Configuration of how speech should be synthesized.
type GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig struct {
	EffectsProfileID []string                                          `json:"effectsProfileId,omitempty"`
	Pitch            *float64                                          `json:"pitch,omitempty"`
	SpeakingRate     *float64                                          `json:"speakingRate,omitempty"`
	Voice            *GoogleCloudDialogflowV2beta1VoiceSelectionParams `json:"voice,omitempty"`
	VolumeGainDb     *float64                                          `json:"volumeGainDb,omitempty"`
}
