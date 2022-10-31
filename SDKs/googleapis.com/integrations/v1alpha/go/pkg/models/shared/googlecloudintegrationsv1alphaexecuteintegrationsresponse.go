package shared

type GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse struct {
	EventParameters  *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"eventParameters,omitempty"`
	ExecutionFailed  *bool                                               `json:"executionFailed,omitempty"`
	ExecutionID      *string                                             `json:"executionId,omitempty"`
	OutputParameters map[string]interface{}                              `json:"outputParameters,omitempty"`
	ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries,omitempty"`
}
