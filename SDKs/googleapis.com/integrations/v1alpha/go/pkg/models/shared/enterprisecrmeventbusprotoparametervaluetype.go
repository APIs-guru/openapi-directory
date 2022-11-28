package shared

// EnterpriseCrmEventbusProtoParameterValueType
// LINT.IfChange To support various types of parameter values. Next available id: 14
type EnterpriseCrmEventbusProtoParameterValueType struct {
	BooleanArray          *EnterpriseCrmEventbusProtoBooleanParameterArray     `json:"booleanArray,omitempty"`
	BooleanValue          *bool                                                `json:"booleanValue,omitempty"`
	DoubleArray           *EnterpriseCrmEventbusProtoDoubleParameterArray      `json:"doubleArray,omitempty"`
	DoubleValue           *float64                                             `json:"doubleValue,omitempty"`
	IntArray              *EnterpriseCrmEventbusProtoIntParameterArray         `json:"intArray,omitempty"`
	IntValue              *string                                              `json:"intValue,omitempty"`
	ProtoArray            *EnterpriseCrmEventbusProtoProtoParameterArray       `json:"protoArray,omitempty"`
	ProtoValue            map[string]interface{}                               `json:"protoValue,omitempty"`
	SerializedObjectValue *EnterpriseCrmEventbusProtoSerializedObjectParameter `json:"serializedObjectValue,omitempty"`
	StringArray           *EnterpriseCrmEventbusProtoStringParameterArray      `json:"stringArray,omitempty"`
	StringValue           *string                                              `json:"stringValue,omitempty"`
}
