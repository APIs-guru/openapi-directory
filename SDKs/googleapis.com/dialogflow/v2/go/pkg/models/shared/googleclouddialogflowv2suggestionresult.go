package shared

type GoogleCloudDialogflowV2SuggestionResult struct {
	Error                       *GoogleRPCStatus                                    `json:"error"`
	SuggestArticlesResponse     *GoogleCloudDialogflowV2SuggestArticlesResponse     `json:"suggestArticlesResponse"`
	SuggestFaqAnswersResponse   *GoogleCloudDialogflowV2SuggestFaqAnswersResponse   `json:"suggestFaqAnswersResponse"`
	SuggestSmartRepliesResponse *GoogleCloudDialogflowV2SuggestSmartRepliesResponse `json:"suggestSmartRepliesResponse"`
}
