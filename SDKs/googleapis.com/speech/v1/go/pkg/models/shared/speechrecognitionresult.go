package shared

// SpeechRecognitionResult
// A speech recognition result corresponding to a portion of the audio.
type SpeechRecognitionResult struct {
	Alternatives  []SpeechRecognitionAlternative `json:"alternatives,omitempty"`
	ChannelTag    *int32                         `json:"channelTag,omitempty"`
	LanguageCode  *string                        `json:"languageCode,omitempty"`
	ResultEndTime *string                        `json:"resultEndTime,omitempty"`
}
