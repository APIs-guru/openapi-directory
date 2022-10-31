package shared




type GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum string

const (
    GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumAutomatedAgentReplyTypeUnspecified GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumPartial GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "PARTIAL"
GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumFinal GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "FINAL"
)


type GoogleCloudDialogflowV2beta1AutomatedAgentReply struct {
    AllowCancellation *bool `json:"allowCancellation,omitempty"`
    AutomatedAgentReplyType *GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum `json:"automatedAgentReplyType,omitempty"`
    CxSessionParameters map[string]interface{} `json:"cxSessionParameters,omitempty"`
    DetectIntentResponse *GoogleCloudDialogflowV2beta1DetectIntentResponse `json:"detectIntentResponse,omitempty"`
    Event *string `json:"event,omitempty"`
    Intent *string `json:"intent,omitempty"`
    MatchConfidence *float32 `json:"matchConfidence,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    ResponseMessages []GoogleCloudDialogflowV2beta1ResponseMessage `json:"responseMessages,omitempty"`
    
}

