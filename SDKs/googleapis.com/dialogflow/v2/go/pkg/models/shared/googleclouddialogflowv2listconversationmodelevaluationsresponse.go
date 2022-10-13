package shared

type GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse struct {
	ConversationModelEvaluations []GoogleCloudDialogflowV2ConversationModelEvaluation `json:"conversationModelEvaluations"`
	NextPageToken                *string                                              `json:"nextPageToken"`
}
