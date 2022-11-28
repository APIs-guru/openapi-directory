package shared

// EnterpriseCrmEventbusProtoParameterEntry
// Key-value pair of EventBus parameters.
type EnterpriseCrmEventbusProtoParameterEntry struct {
	Key   *string                                       `json:"key,omitempty"`
	Value *EnterpriseCrmEventbusProtoParameterValueType `json:"value,omitempty"`
}
