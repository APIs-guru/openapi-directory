package shared

type GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum string

const (
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumExecutionMethodUnspecified GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "EXECUTION_METHOD_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumPost                       GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "POST"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumPostToQueue                GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "POST_TO_QUEUE"
	GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnumSchedule                   GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum = "SCHEDULE"
)

// GoogleCloudIntegrationsV1alphaExecution
// The Execution resource contains detailed information of an individual integration execution.
type GoogleCloudIntegrationsV1alphaExecution struct {
	CreateTime            *string                                                     `json:"createTime,omitempty"`
	DirectSubExecutions   []GoogleCloudIntegrationsV1alphaExecution                   `json:"directSubExecutions,omitempty"`
	EventExecutionDetails *EnterpriseCrmEventbusProtoEventExecutionDetails            `json:"eventExecutionDetails,omitempty"`
	ExecutionDetails      *GoogleCloudIntegrationsV1alphaExecutionDetails             `json:"executionDetails,omitempty"`
	ExecutionMethod       *GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum `json:"executionMethod,omitempty"`
	Name                  *string                                                     `json:"name,omitempty"`
	RequestParameters     map[string]GoogleCloudIntegrationsV1alphaValueType          `json:"requestParameters,omitempty"`
	RequestParams         []EnterpriseCrmFrontendsEventbusProtoParameterEntry         `json:"requestParams,omitempty"`
	ResponseParameters    map[string]GoogleCloudIntegrationsV1alphaValueType          `json:"responseParameters,omitempty"`
	ResponseParams        []EnterpriseCrmFrontendsEventbusProtoParameterEntry         `json:"responseParams,omitempty"`
	TriggerID             *string                                                     `json:"triggerId,omitempty"`
	UpdateTime            *string                                                     `json:"updateTime,omitempty"`
}
