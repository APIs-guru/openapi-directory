package shared

// GoogleCloudDialogflowV2SuggestionResult
// One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
type GoogleCloudDialogflowV2SuggestionResult struct {
	Error                       *GoogleRPCStatus                                    `json:"error,omitempty"`
	SuggestArticlesResponse     *GoogleCloudDialogflowV2SuggestArticlesResponse     `json:"suggestArticlesResponse,omitempty"`
	SuggestFaqAnswersResponse   *GoogleCloudDialogflowV2SuggestFaqAnswersResponse   `json:"suggestFaqAnswersResponse,omitempty"`
	SuggestSmartRepliesResponse *GoogleCloudDialogflowV2SuggestSmartRepliesResponse `json:"suggestSmartRepliesResponse,omitempty"`
}
