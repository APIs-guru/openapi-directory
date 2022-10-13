package shared

type GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig struct {
	AudioTracks                []int32                                            `json:"audioTracks"`
	DiarizationSpeakerCount    *int32                                             `json:"diarizationSpeakerCount"`
	EnableAutomaticPunctuation *bool                                              `json:"enableAutomaticPunctuation"`
	EnableSpeakerDiarization   *bool                                              `json:"enableSpeakerDiarization"`
	EnableWordConfidence       *bool                                              `json:"enableWordConfidence"`
	FilterProfanity            *bool                                              `json:"filterProfanity"`
	LanguageCode               *string                                            `json:"languageCode"`
	MaxAlternatives            *int32                                             `json:"maxAlternatives"`
	SpeechContexts             []GoogleCloudVideointelligenceV1beta2SpeechContext `json:"speechContexts"`
}
