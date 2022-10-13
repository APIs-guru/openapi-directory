package shared

type GoogleCloudDialogflowV2SuggestArticlesRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2AssistQueryParameters `json:"assistQueryParams"`
	ContextSize       *int32                                        `json:"contextSize"`
	LatestMessage     *string                                       `json:"latestMessage"`
}
