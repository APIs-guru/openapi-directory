package shared

type GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest struct {
	DoNotPropagateError *bool                                               `json:"doNotPropagateError"`
	ExecutionID         *string                                             `json:"executionId"`
	InputParameters     map[string]GoogleCloudIntegrationsV1alphaValueType  `json:"inputParameters"`
	ParameterEntries    []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries"`
	Parameters          *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"parameters"`
	RequestID           *string                                             `json:"requestId"`
	TriggerID           *string                                             `json:"triggerId"`
}
