package shared



type GoogleCloudDialogflowV2SuggestionResult struct {
    Error *GoogleRPCStatus `json:"error,omitempty"`
    SuggestArticlesResponse *GoogleCloudDialogflowV2SuggestArticlesResponse `json:"suggestArticlesResponse,omitempty"`
    SuggestFaqAnswersResponse *GoogleCloudDialogflowV2SuggestFaqAnswersResponse `json:"suggestFaqAnswersResponse,omitempty"`
    SuggestSmartRepliesResponse *GoogleCloudDialogflowV2SuggestSmartRepliesResponse `json:"suggestSmartRepliesResponse,omitempty"`
    
}

