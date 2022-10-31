package shared



type GoogleCloudDialogflowCxV3SynthesizeSpeechConfig struct {
    EffectsProfileID []string `json:"effectsProfileId,omitempty"`
    Pitch *float64 `json:"pitch,omitempty"`
    SpeakingRate *float64 `json:"speakingRate,omitempty"`
    Voice *GoogleCloudDialogflowCxV3VoiceSelectionParams `json:"voice,omitempty"`
    VolumeGainDb *float64 `json:"volumeGainDb,omitempty"`
    
}

