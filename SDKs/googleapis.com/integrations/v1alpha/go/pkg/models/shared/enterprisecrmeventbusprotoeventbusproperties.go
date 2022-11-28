package shared

// EnterpriseCrmEventbusProtoEventBusProperties
// LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. Please see go/cloud-crm-eng/platform/event_bus.md for more details.
type EnterpriseCrmEventbusProtoEventBusProperties struct {
	Properties []EnterpriseCrmEventbusProtoPropertyEntry `json:"properties,omitempty"`
}
