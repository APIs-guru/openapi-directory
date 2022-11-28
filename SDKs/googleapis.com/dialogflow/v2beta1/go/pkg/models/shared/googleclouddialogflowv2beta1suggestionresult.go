package shared

// GoogleCloudDialogflowV2beta1SuggestionResult
// One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
type GoogleCloudDialogflowV2beta1SuggestionResult struct {
	Error                       *GoogleRPCStatus                                         `json:"error,omitempty"`
	SuggestArticlesResponse     *GoogleCloudDialogflowV2beta1SuggestArticlesResponse     `json:"suggestArticlesResponse,omitempty"`
	SuggestFaqAnswersResponse   *GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse   `json:"suggestFaqAnswersResponse,omitempty"`
	SuggestSmartRepliesResponse *GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse `json:"suggestSmartRepliesResponse,omitempty"`
}
