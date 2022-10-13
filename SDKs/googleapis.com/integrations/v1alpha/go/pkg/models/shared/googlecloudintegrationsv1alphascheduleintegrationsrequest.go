package shared

type GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest struct {
	InputParameters  map[string]GoogleCloudIntegrationsV1alphaValueType  `json:"inputParameters"`
	ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries"`
	Parameters       *EnterpriseCrmEventbusProtoEventParameters          `json:"parameters"`
	RequestID        *string                                             `json:"requestId"`
	ScheduleTime     *string                                             `json:"scheduleTime"`
	TriggerID        *string                                             `json:"triggerId"`
}
