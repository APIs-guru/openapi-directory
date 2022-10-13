package shared

type GoogleCloudDialogflowV2AnalyzeContentResponse struct {
	AutomatedAgentReply         *GoogleCloudDialogflowV2AutomatedAgentReply `json:"automatedAgentReply"`
	DtmfParameters              *GoogleCloudDialogflowV2DtmfParameters      `json:"dtmfParameters"`
	EndUserSuggestionResults    []GoogleCloudDialogflowV2SuggestionResult   `json:"endUserSuggestionResults"`
	HumanAgentSuggestionResults []GoogleCloudDialogflowV2SuggestionResult   `json:"humanAgentSuggestionResults"`
	Message                     *GoogleCloudDialogflowV2Message             `json:"message"`
	ReplyAudio                  *GoogleCloudDialogflowV2OutputAudio         `json:"replyAudio"`
	ReplyText                   *string                                     `json:"replyText"`
}
