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

type EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo struct {
	ClientID                            *string                                                              `json:"clientId"`
	CreateTime                          *string                                                              `json:"createTime"`
	ErrorCode                           *CrmlogErrorCode                                                     `json:"errorCode"`
	Errors                              []EnterpriseCrmEventbusProtoErrorDetail                              `json:"errors"`
	EventExecutionDetails               *EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails            `json:"eventExecutionDetails"`
	EventExecutionInfoID                *string                                                              `json:"eventExecutionInfoId"`
	ExecutionTraceInfo                  *EnterpriseCrmEventbusProtoExecutionTraceInfo                        `json:"executionTraceInfo"`
	LastModifiedTime                    *string                                                              `json:"lastModifiedTime"`
	PostMethod                          *EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum `json:"postMethod"`
	Product                             *EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum    `json:"product"`
	RequestID                           *string                                                              `json:"requestId"`
	RequestParams                       *EnterpriseCrmFrontendsEventbusProtoEventParameters                  `json:"requestParams"`
	ResponseParams                      *EnterpriseCrmFrontendsEventbusProtoEventParameters                  `json:"responseParams"`
	SnapshotNumber                      *string                                                              `json:"snapshotNumber"`
	Tenant                              *string                                                              `json:"tenant"`
	TriggerID                           *string                                                              `json:"triggerId"`
	WorkflowID                          *string                                                              `json:"workflowId"`
	WorkflowName                        *string                                                              `json:"workflowName"`
	WorkflowRetryBackoffIntervalSeconds *string                                                              `json:"workflowRetryBackoffIntervalSeconds"`
}
