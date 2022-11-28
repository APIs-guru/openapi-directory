package shared

// GoogleCloudDialogflowV2SuggestArticlesRequest
// The request message for Participants.SuggestArticles.
type GoogleCloudDialogflowV2SuggestArticlesRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2AssistQueryParameters `json:"assistQueryParams,omitempty"`
	ContextSize       *int32                                        `json:"contextSize,omitempty"`
	LatestMessage     *string                                       `json:"latestMessage,omitempty"`
}
