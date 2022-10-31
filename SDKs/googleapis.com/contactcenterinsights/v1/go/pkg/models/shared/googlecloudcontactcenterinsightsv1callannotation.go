package shared

type GoogleCloudContactcenterinsightsV1CallAnnotation struct {
	AnnotationEndBoundary   *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"annotationEndBoundary,omitempty"`
	AnnotationStartBoundary *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"annotationStartBoundary,omitempty"`
	ChannelTag              *int32                                                `json:"channelTag,omitempty"`
	EntityMentionData       *GoogleCloudContactcenterinsightsV1EntityMentionData  `json:"entityMentionData,omitempty"`
	HoldData                map[string]interface{}                                `json:"holdData,omitempty"`
	IntentMatchData         *GoogleCloudContactcenterinsightsV1IntentMatchData    `json:"intentMatchData,omitempty"`
	InterruptionData        map[string]interface{}                                `json:"interruptionData,omitempty"`
	PhraseMatchData         *GoogleCloudContactcenterinsightsV1PhraseMatchData    `json:"phraseMatchData,omitempty"`
	SentimentData           *GoogleCloudContactcenterinsightsV1SentimentData      `json:"sentimentData,omitempty"`
	SilenceData             map[string]interface{}                                `json:"silenceData,omitempty"`
}
