package shared

// GoogleCloudDialogflowV2beta1AnalyzeContentResponse
// The response message for Participants.AnalyzeContent.
type GoogleCloudDialogflowV2beta1AnalyzeContentResponse struct {
	AutomatedAgentReply         *GoogleCloudDialogflowV2beta1AutomatedAgentReply `json:"automatedAgentReply,omitempty"`
	DtmfParameters              *GoogleCloudDialogflowV2beta1DtmfParameters      `json:"dtmfParameters,omitempty"`
	EndUserSuggestionResults    []GoogleCloudDialogflowV2beta1SuggestionResult   `json:"endUserSuggestionResults,omitempty"`
	HumanAgentSuggestionResults []GoogleCloudDialogflowV2beta1SuggestionResult   `json:"humanAgentSuggestionResults,omitempty"`
	Message                     *GoogleCloudDialogflowV2beta1Message             `json:"message,omitempty"`
	ReplyAudio                  *GoogleCloudDialogflowV2beta1OutputAudio         `json:"replyAudio,omitempty"`
	ReplyText                   *string                                          `json:"replyText,omitempty"`
}
