package shared

type GoogleCloudDialogflowV2beta1AnalyzeContentResponse struct {
	AutomatedAgentReply         *GoogleCloudDialogflowV2beta1AutomatedAgentReply `json:"automatedAgentReply"`
	DtmfParameters              *GoogleCloudDialogflowV2beta1DtmfParameters      `json:"dtmfParameters"`
	EndUserSuggestionResults    []GoogleCloudDialogflowV2beta1SuggestionResult   `json:"endUserSuggestionResults"`
	HumanAgentSuggestionResults []GoogleCloudDialogflowV2beta1SuggestionResult   `json:"humanAgentSuggestionResults"`
	Message                     *GoogleCloudDialogflowV2beta1Message             `json:"message"`
	ReplyAudio                  *GoogleCloudDialogflowV2beta1OutputAudio         `json:"replyAudio"`
	ReplyText                   *string                                          `json:"replyText"`
}
