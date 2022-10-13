package shared

type GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2beta1AssistQueryParameters `json:"assistQueryParams"`
	ContextSize       *int32                                             `json:"contextSize"`
	LatestMessage     *string                                            `json:"latestMessage"`
}
