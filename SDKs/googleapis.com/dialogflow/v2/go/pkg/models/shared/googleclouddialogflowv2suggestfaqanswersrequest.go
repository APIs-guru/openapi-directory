package shared

// GoogleCloudDialogflowV2SuggestFaqAnswersRequest
// The request message for Participants.SuggestFaqAnswers.
type GoogleCloudDialogflowV2SuggestFaqAnswersRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2AssistQueryParameters `json:"assistQueryParams,omitempty"`
	ContextSize       *int32                                        `json:"contextSize,omitempty"`
	LatestMessage     *string                                       `json:"latestMessage,omitempty"`
}
