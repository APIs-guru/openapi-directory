package shared

type GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2beta1AssistQueryParameters `json:"assistQueryParams,omitempty"`
	ContextSize       *int32                                             `json:"contextSize,omitempty"`
	LatestMessage     *string                                            `json:"latestMessage,omitempty"`
}
