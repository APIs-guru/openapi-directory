package shared

type GoogleCloudDialogflowV2beta1CompileSuggestionResponse struct {
	ContextSize   *int32                                  `json:"contextSize"`
	LatestMessage *string                                 `json:"latestMessage"`
	Suggestion    *GoogleCloudDialogflowV2beta1Suggestion `json:"suggestion"`
}
