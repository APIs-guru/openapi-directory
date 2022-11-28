package shared

type EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumUnspecified          EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumPost                 EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "POST"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumPostToQueue          EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "POST_TO_QUEUE"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumSchedule             EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "SCHEDULE"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumPostByEventConfigID  EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "POST_BY_EVENT_CONFIG_ID"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnumPostWithEventDetails EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum = "POST_WITH_EVENT_DETAILS"
)

type EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnumUnspecifiedProduct EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum = "UNSPECIFIED_PRODUCT"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnumIP                 EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum = "IP"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnumApigee             EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum = "APIGEE"
	EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnumSecurity           EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum = "SECURITY"
)

// EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
// Contains all the execution details for a workflow instance. Next available id: 24
type EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo struct {
	ClientID                            *string                                                              `json:"clientId,omitempty"`
	CreateTime                          *string                                                              `json:"createTime,omitempty"`
	ErrorCode                           *CrmlogErrorCode                                                     `json:"errorCode,omitempty"`
	Errors                              []EnterpriseCrmEventbusProtoErrorDetail                              `json:"errors,omitempty"`
	EventExecutionDetails               *EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails            `json:"eventExecutionDetails,omitempty"`
	EventExecutionInfoID                *string                                                              `json:"eventExecutionInfoId,omitempty"`
	ExecutionTraceInfo                  *EnterpriseCrmEventbusProtoExecutionTraceInfo                        `json:"executionTraceInfo,omitempty"`
	LastModifiedTime                    *string                                                              `json:"lastModifiedTime,omitempty"`
	PostMethod                          *EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum `json:"postMethod,omitempty"`
	Product                             *EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum    `json:"product,omitempty"`
	RequestID                           *string                                                              `json:"requestId,omitempty"`
	RequestParams                       *EnterpriseCrmFrontendsEventbusProtoEventParameters                  `json:"requestParams,omitempty"`
	ResponseParams                      *EnterpriseCrmFrontendsEventbusProtoEventParameters                  `json:"responseParams,omitempty"`
	SnapshotNumber                      *string                                                              `json:"snapshotNumber,omitempty"`
	Tenant                              *string                                                              `json:"tenant,omitempty"`
	TriggerID                           *string                                                              `json:"triggerId,omitempty"`
	WorkflowID                          *string                                                              `json:"workflowId,omitempty"`
	WorkflowName                        *string                                                              `json:"workflowName,omitempty"`
	WorkflowRetryBackoffIntervalSeconds *string                                                              `json:"workflowRetryBackoffIntervalSeconds,omitempty"`
}
