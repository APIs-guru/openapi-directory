package shared



type GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest struct {
    DoNotPropagateError *bool `json:"doNotPropagateError,omitempty"`
    ExecutionID *string `json:"executionId,omitempty"`
    InputParameters map[string]GoogleCloudIntegrationsV1alphaValueType `json:"inputParameters,omitempty"`
    ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries,omitempty"`
    Parameters *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"parameters,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    TriggerID *string `json:"triggerId,omitempty"`
    
}

