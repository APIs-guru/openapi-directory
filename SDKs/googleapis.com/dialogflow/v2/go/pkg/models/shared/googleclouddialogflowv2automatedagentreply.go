package shared

type GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum string

const (
	GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnumAutomatedAgentReplyTypeUnspecified GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnumPartial                            GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "PARTIAL"
	GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnumFinal                              GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "FINAL"
)

type GoogleCloudDialogflowV2AutomatedAgentReply struct {
	AllowCancellation       *bool                                                                  `json:"allowCancellation,omitempty"`
	AutomatedAgentReplyType *GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum `json:"automatedAgentReplyType,omitempty"`
	DetectIntentResponse    *GoogleCloudDialogflowV2DetectIntentResponse                           `json:"detectIntentResponse,omitempty"`
}
