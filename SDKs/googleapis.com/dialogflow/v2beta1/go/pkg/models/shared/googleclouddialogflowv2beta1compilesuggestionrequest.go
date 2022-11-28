package shared

// GoogleCloudDialogflowV2beta1CompileSuggestionRequest
// The request message for Participants.CompileSuggestion.
type GoogleCloudDialogflowV2beta1CompileSuggestionRequest struct {
	ContextSize   *int32  `json:"contextSize,omitempty"`
	LatestMessage *string `json:"latestMessage,omitempty"`
}
