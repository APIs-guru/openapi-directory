package shared



type EnterpriseCrmFrontendsEventbusProtoParameterValueType struct {
    BooleanArray *EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray `json:"booleanArray,omitempty"`
    BooleanValue *bool `json:"booleanValue,omitempty"`
    DoubleArray *EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray `json:"doubleArray,omitempty"`
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    IntArray *EnterpriseCrmFrontendsEventbusProtoIntParameterArray `json:"intArray,omitempty"`
    IntValue *string `json:"intValue,omitempty"`
    JSONValue *string `json:"jsonValue,omitempty"`
    ProtoArray *EnterpriseCrmFrontendsEventbusProtoProtoParameterArray `json:"protoArray,omitempty"`
    ProtoValue map[string]interface{} `json:"protoValue,omitempty"`
    SerializedObjectValue *EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter `json:"serializedObjectValue,omitempty"`
    StringArray *EnterpriseCrmFrontendsEventbusProtoStringParameterArray `json:"stringArray,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

