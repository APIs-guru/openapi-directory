package shared

// EnterpriseCrmEventbusProtoPropertyEntry
// Key-value pair of EventBus property.
type EnterpriseCrmEventbusProtoPropertyEntry struct {
	Key   *string                              `json:"key,omitempty"`
	Value *EnterpriseCrmEventbusProtoValueType `json:"value,omitempty"`
}
