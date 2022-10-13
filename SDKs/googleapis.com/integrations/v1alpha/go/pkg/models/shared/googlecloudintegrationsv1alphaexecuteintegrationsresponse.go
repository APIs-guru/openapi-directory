package shared

type GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse struct {
	EventParameters  *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"eventParameters"`
	ExecutionFailed  *bool                                               `json:"executionFailed"`
	ExecutionID      *string                                             `json:"executionId"`
	OutputParameters map[string]interface{}                              `json:"outputParameters"`
	ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries"`
}
