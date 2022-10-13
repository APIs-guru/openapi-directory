package shared

type GoogleCloudContactcenterinsightsV1RuntimeAnnotation struct {
	AnnotationID           *string                                                       `json:"annotationId"`
	AnswerFeedback         *GoogleCloudContactcenterinsightsV1AnswerFeedback             `json:"answerFeedback"`
	ArticleSuggestion      *GoogleCloudContactcenterinsightsV1ArticleSuggestionData      `json:"articleSuggestion"`
	CreateTime             *string                                                       `json:"createTime"`
	DialogflowInteraction  *GoogleCloudContactcenterinsightsV1DialogflowInteractionData  `json:"dialogflowInteraction"`
	EndBoundary            *GoogleCloudContactcenterinsightsV1AnnotationBoundary         `json:"endBoundary"`
	FaqAnswer              *GoogleCloudContactcenterinsightsV1FaqAnswerData              `json:"faqAnswer"`
	SmartComposeSuggestion *GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData `json:"smartComposeSuggestion"`
	SmartReply             *GoogleCloudContactcenterinsightsV1SmartReplyData             `json:"smartReply"`
	StartBoundary          *GoogleCloudContactcenterinsightsV1AnnotationBoundary         `json:"startBoundary"`
}
