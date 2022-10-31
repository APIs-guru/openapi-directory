package shared



type GoogleCloudDialogflowV2AnalyzeContentResponse struct {
    AutomatedAgentReply *GoogleCloudDialogflowV2AutomatedAgentReply `json:"automatedAgentReply,omitempty"`
    DtmfParameters *GoogleCloudDialogflowV2DtmfParameters `json:"dtmfParameters,omitempty"`
    EndUserSuggestionResults []GoogleCloudDialogflowV2SuggestionResult `json:"endUserSuggestionResults,omitempty"`
    HumanAgentSuggestionResults []GoogleCloudDialogflowV2SuggestionResult `json:"humanAgentSuggestionResults,omitempty"`
    Message *GoogleCloudDialogflowV2Message `json:"message,omitempty"`
    ReplyAudio *GoogleCloudDialogflowV2OutputAudio `json:"replyAudio,omitempty"`
    ReplyText *string `json:"replyText,omitempty"`
    
}

