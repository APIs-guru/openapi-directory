package shared

// EnterpriseCrmEventbusProtoEventParameters
// LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see go/integration-platform/event_bus.md for more details. Next id: 4
type EnterpriseCrmEventbusProtoEventParameters struct {
	Parameters []EnterpriseCrmEventbusProtoParameterEntry `json:"parameters,omitempty"`
}
