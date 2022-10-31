package shared



type EnterpriseCrmEventbusProtoValueType struct {
    BooleanValue *bool `json:"booleanValue,omitempty"`
    DoubleArray *EnterpriseCrmEventbusProtoDoubleArray `json:"doubleArray,omitempty"`
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    IntArray *EnterpriseCrmEventbusProtoIntArray `json:"intArray,omitempty"`
    IntValue *string `json:"intValue,omitempty"`
    ProtoValue map[string]interface{} `json:"protoValue,omitempty"`
    StringArray *EnterpriseCrmEventbusProtoStringArray `json:"stringArray,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

