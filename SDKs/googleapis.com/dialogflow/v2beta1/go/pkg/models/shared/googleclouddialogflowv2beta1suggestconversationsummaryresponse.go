package shared

type GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse struct {
	ContextSize   *int32                                                                 `json:"contextSize"`
	LatestMessage *string                                                                `json:"latestMessage"`
	Summary       *GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary `json:"summary"`
}
