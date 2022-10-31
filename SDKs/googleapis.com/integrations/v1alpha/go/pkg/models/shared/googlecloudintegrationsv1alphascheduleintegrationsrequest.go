package shared



type GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest struct {
    InputParameters map[string]GoogleCloudIntegrationsV1alphaValueType `json:"inputParameters,omitempty"`
    ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries,omitempty"`
    Parameters *EnterpriseCrmEventbusProtoEventParameters `json:"parameters,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    ScheduleTime *string `json:"scheduleTime,omitempty"`
    TriggerID *string `json:"triggerId,omitempty"`
    
}

