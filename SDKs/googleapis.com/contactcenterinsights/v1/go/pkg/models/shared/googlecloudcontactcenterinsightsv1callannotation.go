package shared

type GoogleCloudContactcenterinsightsV1CallAnnotation struct {
	AnnotationEndBoundary   *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"annotationEndBoundary"`
	AnnotationStartBoundary *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"annotationStartBoundary"`
	ChannelTag              *int32                                                `json:"channelTag"`
	EntityMentionData       *GoogleCloudContactcenterinsightsV1EntityMentionData  `json:"entityMentionData"`
	HoldData                map[string]interface{}                                `json:"holdData"`
	IntentMatchData         *GoogleCloudContactcenterinsightsV1IntentMatchData    `json:"intentMatchData"`
	InterruptionData        map[string]interface{}                                `json:"interruptionData"`
	PhraseMatchData         *GoogleCloudContactcenterinsightsV1PhraseMatchData    `json:"phraseMatchData"`
	SentimentData           *GoogleCloudContactcenterinsightsV1SentimentData      `json:"sentimentData"`
	SilenceData             map[string]interface{}                                `json:"silenceData"`
}
