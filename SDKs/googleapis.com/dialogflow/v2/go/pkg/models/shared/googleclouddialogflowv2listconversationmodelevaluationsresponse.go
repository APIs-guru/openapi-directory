package shared

type GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse struct {
	ConversationModelEvaluations []GoogleCloudDialogflowV2ConversationModelEvaluation `json:"conversationModelEvaluations,omitempty"`
	NextPageToken                *string                                              `json:"nextPageToken,omitempty"`
}
