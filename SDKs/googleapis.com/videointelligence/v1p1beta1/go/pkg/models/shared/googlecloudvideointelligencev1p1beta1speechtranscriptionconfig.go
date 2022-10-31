package shared



type GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig struct {
    AudioTracks []int32 `json:"audioTracks,omitempty"`
    DiarizationSpeakerCount *int32 `json:"diarizationSpeakerCount,omitempty"`
    EnableAutomaticPunctuation *bool `json:"enableAutomaticPunctuation,omitempty"`
    EnableSpeakerDiarization *bool `json:"enableSpeakerDiarization,omitempty"`
    EnableWordConfidence *bool `json:"enableWordConfidence,omitempty"`
    FilterProfanity *bool `json:"filterProfanity,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    MaxAlternatives *int32 `json:"maxAlternatives,omitempty"`
    SpeechContexts []GoogleCloudVideointelligenceV1p1beta1SpeechContext `json:"speechContexts,omitempty"`
    
}

