package shared

type GoogleCloudDialogflowV2beta1SuggestionResult struct {
	Error                       *GoogleRPCStatus                                         `json:"error"`
	SuggestArticlesResponse     *GoogleCloudDialogflowV2beta1SuggestArticlesResponse     `json:"suggestArticlesResponse"`
	SuggestFaqAnswersResponse   *GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse   `json:"suggestFaqAnswersResponse"`
	SuggestSmartRepliesResponse *GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse `json:"suggestSmartRepliesResponse"`
}
