package shared

type EnterpriseCrmFrontendsEventbusProtoParameterValueType struct {
	BooleanArray          *EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray     `json:"booleanArray"`
	BooleanValue          *bool                                                         `json:"booleanValue"`
	DoubleArray           *EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray      `json:"doubleArray"`
	DoubleValue           *float64                                                      `json:"doubleValue"`
	IntArray              *EnterpriseCrmFrontendsEventbusProtoIntParameterArray         `json:"intArray"`
	IntValue              *string                                                       `json:"intValue"`
	JSONValue             *string                                                       `json:"jsonValue"`
	ProtoArray            *EnterpriseCrmFrontendsEventbusProtoProtoParameterArray       `json:"protoArray"`
	ProtoValue            map[string]interface{}                                        `json:"protoValue"`
	SerializedObjectValue *EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter `json:"serializedObjectValue"`
	StringArray           *EnterpriseCrmFrontendsEventbusProtoStringParameterArray      `json:"stringArray"`
	StringValue           *string                                                       `json:"stringValue"`
}
