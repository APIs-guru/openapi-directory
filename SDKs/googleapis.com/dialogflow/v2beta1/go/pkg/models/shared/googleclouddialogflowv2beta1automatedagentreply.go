package shared

type GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum string

const (
	GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumAutomatedAgentReplyTypeUnspecified GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumPartial                            GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "PARTIAL"
	GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnumFinal                              GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = "FINAL"
)

type GoogleCloudDialogflowV2beta1AutomatedAgentReply struct {
	AllowCancellation       *bool                                                                       `json:"allowCancellation"`
	AutomatedAgentReplyType *GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum `json:"automatedAgentReplyType"`
	CxSessionParameters     map[string]interface{}                                                      `json:"cxSessionParameters"`
	DetectIntentResponse    *GoogleCloudDialogflowV2beta1DetectIntentResponse                           `json:"detectIntentResponse"`
	Event                   *string                                                                     `json:"event"`
	Intent                  *string                                                                     `json:"intent"`
	MatchConfidence         *float32                                                                    `json:"matchConfidence"`
	Parameters              map[string]interface{}                                                      `json:"parameters"`
	ResponseMessages        []GoogleCloudDialogflowV2beta1ResponseMessage                               `json:"responseMessages"`
}
