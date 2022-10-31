package shared

type GoogleCloudDialogflowV2beta1CompileSuggestionResponse struct {
	ContextSize   *int32                                  `json:"contextSize,omitempty"`
	LatestMessage *string                                 `json:"latestMessage,omitempty"`
	Suggestion    *GoogleCloudDialogflowV2beta1Suggestion `json:"suggestion,omitempty"`
}
