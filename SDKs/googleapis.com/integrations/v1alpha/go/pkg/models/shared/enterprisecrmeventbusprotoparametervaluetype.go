package shared

type EnterpriseCrmEventbusProtoParameterValueType struct {
	BooleanArray          *EnterpriseCrmEventbusProtoBooleanParameterArray     `json:"booleanArray"`
	BooleanValue          *bool                                                `json:"booleanValue"`
	DoubleArray           *EnterpriseCrmEventbusProtoDoubleParameterArray      `json:"doubleArray"`
	DoubleValue           *float64                                             `json:"doubleValue"`
	IntArray              *EnterpriseCrmEventbusProtoIntParameterArray         `json:"intArray"`
	IntValue              *string                                              `json:"intValue"`
	ProtoArray            *EnterpriseCrmEventbusProtoProtoParameterArray       `json:"protoArray"`
	ProtoValue            map[string]interface{}                               `json:"protoValue"`
	SerializedObjectValue *EnterpriseCrmEventbusProtoSerializedObjectParameter `json:"serializedObjectValue"`
	StringArray           *EnterpriseCrmEventbusProtoStringParameterArray      `json:"stringArray"`
	StringValue           *string                                              `json:"stringValue"`
}
