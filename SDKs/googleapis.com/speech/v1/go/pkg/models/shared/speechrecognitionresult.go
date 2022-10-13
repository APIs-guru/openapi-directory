package shared

type SpeechRecognitionResult struct {
	Alternatives  []SpeechRecognitionAlternative `json:"alternatives"`
	ChannelTag    *int32                         `json:"channelTag"`
	LanguageCode  *string                        `json:"languageCode"`
	ResultEndTime *string                        `json:"resultEndTime"`
}
