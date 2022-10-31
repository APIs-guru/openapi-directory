package shared



type GoogleCloudContactcenterinsightsV1RuntimeAnnotation struct {
    AnnotationID *string `json:"annotationId,omitempty"`
    AnswerFeedback *GoogleCloudContactcenterinsightsV1AnswerFeedback `json:"answerFeedback,omitempty"`
    ArticleSuggestion *GoogleCloudContactcenterinsightsV1ArticleSuggestionData `json:"articleSuggestion,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DialogflowInteraction *GoogleCloudContactcenterinsightsV1DialogflowInteractionData `json:"dialogflowInteraction,omitempty"`
    EndBoundary *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"endBoundary,omitempty"`
    FaqAnswer *GoogleCloudContactcenterinsightsV1FaqAnswerData `json:"faqAnswer,omitempty"`
    SmartComposeSuggestion *GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData `json:"smartComposeSuggestion,omitempty"`
    SmartReply *GoogleCloudContactcenterinsightsV1SmartReplyData `json:"smartReply,omitempty"`
    StartBoundary *GoogleCloudContactcenterinsightsV1AnnotationBoundary `json:"startBoundary,omitempty"`
    
}

