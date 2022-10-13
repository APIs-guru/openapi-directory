package shared

type GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum string

const (
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumExecutionMethodUnspecified GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "EXECUTION_METHOD_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumPost                       GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "POST"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumPostToQueue                GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "POST_TO_QUEUE"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumSchedule                   GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "SCHEDULE"
)

type GoogleCloudIntegrationsV1alphaExecution struct {
	CreateTime            *string                                                     `json:"createTime"`
	DirectSubExecutions   []GoogleCloudIntegrationsV1alphaExecution                   `json:"directSubExecutions"`
	EventExecutionDetails *EnterpriseCrmEventbusProtoEventExecutionDetails            `json:"eventExecutionDetails"`
	ExecutionDetails      *GoogleCloudIntegrationsV1alphaExecutionDetails             `json:"executionDetails"`
	ExecutionMethod       *GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum `json:"executionMethod"`
	Name                  *string                                                     `json:"name"`
	RequestParameters     map[string]GoogleCloudIntegrationsV1alphaValueType          `json:"requestParameters"`
	RequestParams         []EnterpriseCrmFrontendsEventbusProtoParameterEntry         `json:"requestParams"`
	ResponseParameters    map[string]GoogleCloudIntegrationsV1alphaValueType          `json:"responseParameters"`
	ResponseParams        []EnterpriseCrmFrontendsEventbusProtoParameterEntry         `json:"responseParams"`
	TriggerID             *string                                                     `json:"triggerId"`
	UpdateTime            *string                                                     `json:"updateTime"`
}
