package shared

// GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse
// The response message for ConversationModels.ListConversationModelEvaluations
type GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse struct {
	ConversationModelEvaluations []GoogleCloudDialogflowV2ConversationModelEvaluation `json:"conversationModelEvaluations,omitempty"`
	NextPageToken                *string                                              `json:"nextPageToken,omitempty"`
}
